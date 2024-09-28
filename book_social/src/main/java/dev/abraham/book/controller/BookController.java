package dev.abraham.book.controller;

import dev.abraham.book.request.book.BookRequest;
import dev.abraham.book.response.APIResponse;
import dev.abraham.book.service.book.BookService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

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
        
    }
}
