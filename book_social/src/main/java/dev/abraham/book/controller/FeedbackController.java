package dev.abraham.book.controller;

import dev.abraham.book.request.feedback.FeedbackRequest;
import dev.abraham.book.response.APIResponse;
import dev.abraham.book.response.PageResponse;
import dev.abraham.book.response.feedback.FeedbackResponse;
import dev.abraham.book.service.feedback.FeedbackService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR;

@RestController
@RequestMapping("feedbacks")
@RequiredArgsConstructor
@Tag(name="Feedback")
public class FeedbackController {
    private final FeedbackService feedbackService;

    @PostMapping("/save")
    private ResponseEntity<APIResponse> saveFeedback(@Valid @RequestBody FeedbackRequest request, Authentication auth) {
        try{
            return ResponseEntity.ok(new APIResponse("Feedback saved",feedbackService.saveFeedback(request, auth)));
        } catch (Exception e) {
            return ResponseEntity.status(INTERNAL_SERVER_ERROR).body(new APIResponse(e.getMessage(), null));
        }
    }

    @GetMapping("/book/{bookId}")
    public ResponseEntity<PageResponse<FeedbackResponse>> getFeedbackbyBook(@PathVariable("bookId") Long bookId,
                                                                            @RequestParam(name="page", defaultValue = "0", required = false) int page,
                                                                            @RequestParam(name="page", defaultValue = "0", required = false) int size,
                                                                            Authentication auth) {
        try{
            return ResponseEntity.ok(feedbackService.findAllFeedbackByBook(bookId, page, size, auth));
        } catch (Exception e) {
            return ResponseEntity.status(INTERNAL_SERVER_ERROR).build();
        }
    }
}
