package dev.abraham.book.mapper;

import dev.abraham.book.model.Book;
import dev.abraham.book.model.Feedback;
import dev.abraham.book.request.feedback.FeedbackRequest;
import dev.abraham.book.response.feedback.FeedbackResponse;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class FeedbackMapper {
    public Feedback toFeedback(FeedbackRequest feedbackRequest) {
        return Feedback.builder()
                .score(feedbackRequest.note())
                .feedback(feedbackRequest.comment())
                .book(Book.builder()
                        .id(feedbackRequest.bookId())
                        .archived(false)
                        .available(false)
                        .build())
                .build();
    }

    public FeedbackResponse toFeedbackResponse(Feedback feedback, Long id) {
        return FeedbackResponse.builder()
                .note(feedback.getScore())
                .comment(feedback.getFeedback())
                .ownFeedback(Objects.equals(feedback.getCreatedBy(), id))
                .build();
    }
}
