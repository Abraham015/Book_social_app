package dev.abraham.book.service.book;

import dev.abraham.book.dto.BookDTO;
import dev.abraham.book.model.Book;
import dev.abraham.book.model.User;
import dev.abraham.book.repository.BookRepository;
import dev.abraham.book.request.book.BookRequest;
import dev.abraham.book.response.book.BookResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BookService {
    private final BookRepository bookRepository;

    public Long save(BookRequest request, Authentication connectedUser){
        User user = ((User) connectedUser.getPrincipal());
        Book book = toBook(request);
        book.setOwner(user);
        return bookRepository.save(book).getId();
    }

    public BookResponse findById(Long id){
        return bookRepository.findById(id)
                .map(req->{
                    BookResponse bookResponse = new BookResponse();
                    bookResponse.setId(req.getId());
                    bookResponse.setTitle(req.getTitle());
                    bookResponse.setOwner(req.getOwner().getFullName());
                    bookResponse.setIsbn(req.getIsbn());
                    bookResponse.setSynopsis(req.getSynopsis());
                    bookResponse.setCover(req.getBookCover().getBytes());
                    bookResponse.setRate(req.getRate());
                    bookResponse.setArchived(req.isArchived());
                    bookResponse.setShareable(req.isAvailable());
                    return bookResponse;
                })
                .orElseThrow(()->new RuntimeException("Book not exist"));
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
}
