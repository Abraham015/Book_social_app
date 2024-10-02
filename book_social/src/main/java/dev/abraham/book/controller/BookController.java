package dev.abraham.book.controller;

import dev.abraham.book.request.book.BookRequest;
import dev.abraham.book.response.APIResponse;
import dev.abraham.book.response.PageResponse;
import dev.abraham.book.response.book.BookResponse;
import dev.abraham.book.response.book.BorrowedBookResponse;
import dev.abraham.book.service.book.BookService;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR;

@RestController
@RequestMapping("books")
@RequiredArgsConstructor
@Tag(name="book")
public class BookController {
    private final BookService bookService;

    @PostMapping
    public ResponseEntity<APIResponse> saveBook(@RequestBody @Valid BookRequest request, Authentication connectedUser){
        try{
            Long id=bookService.save(request,connectedUser);
            return ResponseEntity.ok(new APIResponse("Book created",id));
        }catch (Exception e){
            return ResponseEntity.status(INTERNAL_SERVER_ERROR).body(new APIResponse("Book not saved", null));
        }
    }

    @GetMapping("{id}")
    public ResponseEntity<APIResponse> getBookById(@PathVariable Long id){
        try{
            BookResponse response=bookService.findById(id);
            return ResponseEntity.ok(new APIResponse("Book found",response));
        } catch (RuntimeException e) {
            return ResponseEntity.status(INTERNAL_SERVER_ERROR).body(new APIResponse("Book does not exist", null));
        }
    }

    @GetMapping("/all")
    public ResponseEntity<PageResponse<BookResponse>> getAllBooks
                                                (@RequestParam(name = "page", defaultValue = "0", required = false) int page,
                                                 @RequestParam(name = "size", defaultValue = "10", required = false) int size,
                                                 Authentication connectedUser){
        try{
            return ResponseEntity.ok(bookService.findAllBooks(page, size, connectedUser));
        } catch (Exception e) {
            return ResponseEntity.status(INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/owner")
    public ResponseEntity<PageResponse<BookResponse>> getAllBooksByOwner(@RequestParam(name = "page", defaultValue = "0", required = false) int page,
                                                                         @RequestParam(name = "size", defaultValue = "10", required = false) int size,
                                                                         Authentication connectedUser){
        try{
            return ResponseEntity.ok(bookService.findAllBooksByOwner(page, size, connectedUser));
        } catch (Exception e) {
            return ResponseEntity.status(INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/borrowed")
    public ResponseEntity<PageResponse<BorrowedBookResponse>> getAllBorrowedBooks(@RequestParam(name = "page", defaultValue = "0", required = false) int page,
                                                                                  @RequestParam(name = "size", defaultValue = "10", required = false) int size,
                                                                                  Authentication connectedUser){
        try{
            return ResponseEntity.ok(bookService.findAllBorrowedBooks(page, size, connectedUser));
        } catch (Exception e) {
            return ResponseEntity.status(INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/returned")
    public ResponseEntity<PageResponse<BorrowedBookResponse>> getAllReturnedBooks(@RequestParam(name = "page", defaultValue = "0", required = false) int page,
                                                                                  @RequestParam(name = "size", defaultValue = "10", required = false) int size,
                                                                                  Authentication connectedUser){
        try{
            return ResponseEntity.ok(bookService.findAllReturnedBooks(page, size, connectedUser));
        } catch (Exception e) {
            return ResponseEntity.status(INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @PatchMapping("/shareable/{bookId}")
    public ResponseEntity<APIResponse> updateSharableStatus(@PathVariable Long bookId, Authentication connectedUser){
        try{
            return ResponseEntity.ok(new APIResponse("Updated success", bookService.updateShareableStatus(bookId,connectedUser)));
        } catch (Exception e) {
            return ResponseEntity.status(INTERNAL_SERVER_ERROR).body(new APIResponse("Error updating data", null));
        }
    }

    @PatchMapping("/archived/{bookId}")
    public ResponseEntity<APIResponse> updateArchivedStatus(@PathVariable Long bookId, Authentication connectedUser){
        try{
            return ResponseEntity.ok(new APIResponse("Updated success", bookService.updateArchivedStatus(bookId,connectedUser)));
        } catch (Exception e) {
            return ResponseEntity.status(INTERNAL_SERVER_ERROR).body(new APIResponse("Error updating data", null));
        }
    }

    @PostMapping("/borrow/{bookId}")
    public ResponseEntity<APIResponse> borrowBook(@PathVariable Long bookId, Authentication connectedUser){
        try{
            return ResponseEntity.ok(new APIResponse("Borrowed success", bookService.borrowBook(bookId, connectedUser)));
        } catch (Exception e) {
            return ResponseEntity.status(INTERNAL_SERVER_ERROR).body(new APIResponse(e.getMessage(), null));
        }
    }

    @PatchMapping("/borrow/return/{bookId}")
    public ResponseEntity<APIResponse> returnBook(@PathVariable Long bookId, Authentication connectedUser){
        try{
            return ResponseEntity.ok(new APIResponse("Return success", bookService.returnBook(bookId, connectedUser)));
        } catch (Exception e) {
            return ResponseEntity.status(INTERNAL_SERVER_ERROR).body(new APIResponse(e.getMessage(), null));
        }
    }

    @PatchMapping("/borrow/return/approve/{bookId}")
    public ResponseEntity<APIResponse> approveReturnBook(@PathVariable Long bookId, Authentication connectedUser){
        try{
            return ResponseEntity.ok(new APIResponse("Return approved", bookService.approveReturnBook(bookId, connectedUser)));
        } catch (Exception e) {
            return ResponseEntity.status(INTERNAL_SERVER_ERROR).body(new APIResponse(e.getMessage(), null));
        }
    }

    @PostMapping(value = "/cover/{bookId}", consumes = "multipart/form-data")
    public ResponseEntity<APIResponse> uploadBookCover(@PathVariable Long bookId, Authentication connectedUser, @Parameter() @RequestPart("file")MultipartFile file){
        try{
            return ResponseEntity.ok(new APIResponse("Return approved", bookService.uploadCover(bookId, connectedUser, file)));
        } catch (Exception e) {
            return ResponseEntity.status(INTERNAL_SERVER_ERROR).body(new APIResponse(e.getMessage(), null));
        }
    }
}
