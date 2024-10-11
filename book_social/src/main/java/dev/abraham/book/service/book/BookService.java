package dev.abraham.book.service.book;

import dev.abraham.book.exception.OperationNotValidException;
import dev.abraham.book.mapper.BookMapper;
import dev.abraham.book.model.Book;
import dev.abraham.book.model.BookTransactionHistory;
import dev.abraham.book.model.User;
import dev.abraham.book.repository.BookRepository;
import dev.abraham.book.repository.BookTransactionHistoryRepository;
import dev.abraham.book.request.book.BookRequest;
import dev.abraham.book.response.PageResponse;
import dev.abraham.book.response.book.BookResponse;
import dev.abraham.book.response.book.BorrowedBookResponse;
import dev.abraham.book.service.file.FileStorageService;
import dev.abraham.book.specification.BookSpecification;
import dev.abraham.book.utils.FileUtils;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class BookService implements IBookService{
    private final BookRepository bookRepository;
    private final BookTransactionHistoryRepository bookTransactionHistoryRepository;
    private final FileStorageService fileStorageService;
    private final BookMapper bookMapper;

    public Long save(BookRequest request, Authentication connectedUser){
        User user = ((User) connectedUser.getPrincipal());
        Book book = bookMapper.toBook(request);
        book.setOwner(user);
        book.setCreatedBy(user.getId());
        book.setCreationDate(LocalDateTime.now());
        return bookRepository.save(book).getId();
    }

    public BookResponse findById(Long id){
        return bookRepository.findById(id)
                .map(bookMapper::toBookResponse)
                .orElseThrow(()->new RuntimeException("Book not exist"));
    }

    public PageResponse<BookResponse> findAllBooks(int page, int size, Authentication connectedUser) {
        User user=(User)connectedUser.getPrincipal();
        Pageable pageable= PageRequest.of(page, size, Sort.by("creationDate").descending());
        Page<Book> books=bookRepository.findAllDisplayableBooks(pageable, user.getId());
        List<BookResponse> bookResponseList=books.stream()
                .map(bookMapper::toBookResponse)
                .toList();
        return new PageResponse<>(
                bookResponseList,
                books.getNumber(),
                books.getSize(),
                books.getTotalElements(),
                books.getTotalPages(),
                books.isFirst(),
                books.isLast()
        );
    }

    public PageResponse<BookResponse> findAllBooksByOwner(int page, int size, Authentication connectedUser) {
        User user=(User)connectedUser.getPrincipal();
        Pageable pageable= PageRequest.of(page, size, Sort.by("creationDate").descending());
        Page<Book> books=bookRepository.findAll(BookSpecification.withOwnerId(user.getId()), pageable);
        List<BookResponse> bookResponseList=books.stream()
                .map(bookMapper::toBookResponse)
                .toList();
        return new PageResponse<>(
                bookResponseList,
                books.getNumber(),
                books.getSize(),
                books.getTotalElements(),
                books.getTotalPages(),
                books.isFirst(),
                books.isLast()
        );
    }

    public PageResponse<BorrowedBookResponse> findAllBorrowedBooks(int page, int size, Authentication connectedUser) {
        User user=(User)connectedUser.getPrincipal();
        Pageable pageable= PageRequest.of(page, size, Sort.by("creationDate").descending());
        Page<BookTransactionHistory> books=bookTransactionHistoryRepository.findAllBorrowedBooks(pageable, user.getId());
        List<BorrowedBookResponse> response=books.stream()
                .map(bookMapper::toBorrowedBook)
                .toList();
        return new PageResponse<>(
                response,
                books.getNumber(),
                books.getSize(),
                books.getTotalElements(),
                books.getTotalPages(),
                books.isFirst(),
                books.isLast()
        );
    }

    public PageResponse<BorrowedBookResponse> findAllReturnedBooks(int page, int size, Authentication connectedUser) {
        User user=(User)connectedUser.getPrincipal();
        Pageable pageable= PageRequest.of(page, size, Sort.by("creationDate").descending());
        Page<BookTransactionHistory> books=bookTransactionHistoryRepository.findAllReturnedBooks(pageable, user.getId());
        List<BorrowedBookResponse> response=books.stream()
                .map(bookMapper::toBorrowedBook)
                .toList();
        return new PageResponse<>(
                response,
                books.getNumber(),
                books.getSize(),
                books.getTotalElements(),
                books.getTotalPages(),
                books.isFirst(),
                books.isLast()
        );
    }

    public Long updateShareableStatus(Long bookId, Authentication connectedUser) {
        Book book=bookRepository.findById(bookId)
                .orElseThrow(()->new EntityNotFoundException("Book not found"));
        User user=(User)connectedUser.getPrincipal();
        if(!Objects.equals(book.getOwner().getId(),user.getId())){
            throw new OperationNotValidException("You can not update books shareable status");
        }
        book.setAvailable(!book.isAvailable());
        bookRepository.save(book);
        return book.getId();
    }

    public Long updateArchivedStatus(Long bookId, Authentication connectedUser) {
        Book book=bookRepository.findById(bookId)
                .orElseThrow(()->new EntityNotFoundException("Book not found"));
        User user=(User)connectedUser.getPrincipal();
        if(!Objects.equals(book.getOwner().getId(),user.getId())){
            throw new OperationNotValidException("You can not update books archived status");
        }
        book.setArchived(!book.isArchived());
        bookRepository.save(book);
        return book.getId();
    }

    public Long borrowBook(Long bookId, Authentication connectedUser) {
        Book book=bookRepository.findById(bookId)
                .orElseThrow(()->new EntityNotFoundException("Book not found"));
        if(book.isArchived()||!book.isAvailable()){
            throw new OperationNotValidException("You can not borrow book");
        }

        User user=(User)connectedUser.getPrincipal();
        if(Objects.equals(book.getOwner().getId(),user.getId())){
            throw new OperationNotValidException("You can not borrow your own book");
        }

        final boolean isAvailable=bookTransactionHistoryRepository.isAvailable(bookId, user.getId());
        if(isAvailable){
            throw new OperationNotValidException("The requested book is not available");
        }

        BookTransactionHistory bookTransactionHistory=BookTransactionHistory.builder()
                .users(user)
                .book(book)
                .returned(false)
                .returnApproved(false)
                .build();
        bookTransactionHistory.setCreatedBy(user.getId());
        bookTransactionHistory.setCreationDate(LocalDateTime.now());
        bookTransactionHistoryRepository.save(bookTransactionHistory);
        return bookTransactionHistory.getId();
    }

    public Long returnBook(Long bookId, Authentication connectedUser) {
        Book book=bookRepository.findById(bookId)
                .orElseThrow(()->new EntityNotFoundException("Book not found"));
        if(book.isArchived()||!book.isAvailable()){
            throw new OperationNotValidException("You can not borrow book");
        }
        User user=(User)connectedUser.getPrincipal();
        if(Objects.equals(book.getOwner().getId(),user.getId())){
            throw new OperationNotValidException("You can not return your own book");
        }
        BookTransactionHistory history=bookTransactionHistoryRepository.findByBookIdAndUserId(bookId, user.getId())
                .orElseThrow(()->new OperationNotValidException("You did not borrow this book"));
        history.setReturned(true);
        history.setCreatedBy(user.getId());
        history.setCreationDate(LocalDateTime.now());
        bookTransactionHistoryRepository.save(history);
        return history.getId();
    }

    public Long approveReturnBook(Long bookId, Authentication connectedUser) {
        Book book=bookRepository.findById(bookId)
                .orElseThrow(()->new EntityNotFoundException("Book not found"));
        if(book.isArchived()||!book.isAvailable()){
            throw new OperationNotValidException("You can not borrow book");
        }
        User user=(User)connectedUser.getPrincipal();
        if(!Objects.equals(book.getOwner().getId(),user.getId())){
            throw new OperationNotValidException("You can not return your own book");
        }
        BookTransactionHistory history=bookTransactionHistoryRepository.findByBookIdAndOwnerId(bookId, user.getId())
                .orElseThrow(()->new OperationNotValidException("The book has not returned"));
        history.setReturnApproved(true);
        bookTransactionHistoryRepository.save(history);
        return history.getId();
    }

    public Long uploadCover(Long bookId, Authentication connectedUser, MultipartFile file) {
        Book book=bookRepository.findById(bookId)
                .orElseThrow(()->new EntityNotFoundException("Book not found"));
        User user=(User)connectedUser.getPrincipal();
        String bookCover=fileStorageService.saveFile(file, user.getId());
        book.setBookCover(bookCover);
        bookRepository.save(book);
        return book.getId();
    }
}
