package dev.abraham.book.mapper;

import dev.abraham.book.model.Book;
import dev.abraham.book.model.BookTransactionHistory;
import dev.abraham.book.request.book.BookRequest;
import dev.abraham.book.response.book.BookResponse;
import dev.abraham.book.response.book.BorrowedBookResponse;
import dev.abraham.book.utils.FileUtils;
import org.springframework.stereotype.Service;

@Service
public class BookMapper {
    public BookResponse toBookResponse(Book req){
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

    public Book toBook(BookRequest bookRequest){
        return Book.builder()
                .id(bookRequest.id())
                .title(bookRequest.title())
                .authorName(bookRequest.authorName())
                .synopsis(bookRequest.synopsis())
                .archived(false)
                .available(bookRequest.available())
                .build();
    }

    public BorrowedBookResponse toBorrowedBook(BookTransactionHistory book){
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
