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
import dev.abraham.book.specification.BookSpecification;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class BookService implements IBookService{
    private final BookRepository bookRepository;
    private final BookTransactionHistoryRepository bookTransactionHistoryRepository;

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
