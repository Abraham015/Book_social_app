package dev.abraham.book.service.feedback;

import dev.abraham.book.request.feedback.FeedbackRequest;
import dev.abraham.book.response.PageResponse;
import dev.abraham.book.response.feedback.FeedbackResponse;
import org.springframework.security.core.Authentication;

public interface IFeedbackService {
    Long saveFeedback(FeedbackRequest feedbackRequest, Authentication authentication);
    PageResponse<FeedbackResponse> findAllFeedbackByBook(Long bookId, int page, int size, Authentication auth);
}
