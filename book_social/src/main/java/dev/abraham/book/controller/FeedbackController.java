package dev.abraham.book.controller;

import dev.abraham.book.request.feedback.FeedbackRequest;
import dev.abraham.book.response.APIResponse;
import dev.abraham.book.service.feedback.FeedbackService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
