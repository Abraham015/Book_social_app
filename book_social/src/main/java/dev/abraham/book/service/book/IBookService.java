package dev.abraham.book.service.book;

import dev.abraham.book.request.book.BookRequest;
import dev.abraham.book.response.APIResponse;
import dev.abraham.book.response.PageResponse;
import dev.abraham.book.response.book.BookResponse;
import dev.abraham.book.response.book.BorrowedBookResponse;
import org.springframework.security.core.Authentication;
import org.springframework.web.multipart.MultipartFile;

public interface IBookService {
    Long save(BookRequest request, Authentication connectedUser);
    BookResponse findById(Long id);
    PageResponse<BookResponse> findAllBooks(int page, int size, Authentication connectedUser);
    PageResponse<BookResponse> findAllBooksByOwner(int page, int size, Authentication connectedUser);
    PageResponse<BorrowedBookResponse> findAllBorrowedBooks(int page, int size, Authentication connectedUser);
    PageResponse<BorrowedBookResponse> findAllReturnedBooks(int page, int size, Authentication connectedUser);
    Long updateShareableStatus(Long bookId, Authentication connectedUser);
    Long updateArchivedStatus(Long bookId, Authentication connectedUser);
    Long borrowBook(Long bookId, Authentication connectedUser);
    Long returnBook(Long bookId, Authentication connectedUser);
    Long approveReturnBook(Long bookId, Authentication connectedUser);
    Long uploadCover(Long bookId, Authentication connectedUser, MultipartFile file);
}
