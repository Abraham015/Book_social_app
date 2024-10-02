package dev.abraham.book.service.book;

import dev.abraham.book.exception.OperationNotValidException;
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

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class BookService implements IBookService{
    private final BookRepository bookRepository;
    private final BookTransactionHistoryRepository bookTransactionHistoryRepository;
    private final FileStorageService fileStorageService;

    public Long save(BookRequest request, Authentication connectedUser){
        User user = ((User) connectedUser.getPrincipal());
        Book book = toBook(request);
        book.setOwner(user);
        return bookRepository.save(book).getId();
    }

    public BookResponse findById(Long id){
        return bookRepository.findById(id)
                .map(this::toBookResponse)
                .orElseThrow(()->new RuntimeException("Book not exist"));
    }

    public PageResponse<BookResponse> findAllBooks(int page, int size, Authentication connectedUser) {
        User user=(User)connectedUser.getPrincipal();
        Pageable pageable= PageRequest.of(page, size, Sort.by("creationDate").descending());
        Page<Book> books=bookRepository.findAllDisplayableBooks(pageable, user.getId());
        List<BookResponse> bookResponseList=books.stream()
                .map(this::toBookResponse)
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
                .map(this::toBookResponse)
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
                .map(this::toBorrowedBook)
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
                .map(this::toBorrowedBook)
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
        if(Objects.equals(book.getOwner().getId(),user.getId())){
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

    private BookResponse toBookResponse(Book req){
        return BookResponse.builder()
                .id(req.getId())
                .title(req.getTitle())
                .owner(req.getOwner().getFullName())
                .isbn(req.getIsbn())
                .synopsis(req.getSynopsis())
                .cover(req.getBookCover().getBytes())
                .rate(req.getRate())
                .archived(req.isArchived())
                .shareable(req.isAvailable())
                .cover(FileUtils.readFileFromLocation(req.getBookCover()))
                .build();

    }

    private Book toBook(BookRequest bookRequest){
        return Book.builder()
                .id(bookRequest.id())
                .title(bookRequest.title())
                .authorName(bookRequest.authorName())
                .synopsis(bookRequest.synopsis())
                .archived(false)
                .available(bookRequest.available())
                .build();
    }

    private BorrowedBookResponse toBorrowedBook(BookTransactionHistory book){
        return BorrowedBookResponse.builder()
                .id(book.getId())
                .title(book.getBook().getTitle())
                .authorName(book.getBook().getAuthorName())
                .isbn(book.getBook().getIsbn())
                .rate(book.getBook().getRate())
                .returned(book.isReturned())
                .returnApproved(book.isReturnApproved())
                .build();
    }

}
