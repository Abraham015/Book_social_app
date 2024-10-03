package dev.abraham.book.service.feedback;

import dev.abraham.book.exception.OperationNotValidException;
import dev.abraham.book.model.Book;
import dev.abraham.book.model.Feedback;
import dev.abraham.book.model.User;
import dev.abraham.book.repository.BookRepository;
import dev.abraham.book.repository.FeedbackRepository;
import dev.abraham.book.request.feedback.FeedbackRequest;
import dev.abraham.book.response.PageResponse;
import dev.abraham.book.response.feedback.FeedbackResponse;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class FeedbackService {
    private final BookRepository bookRepository;
    private final FeedbackRepository feedbackRepository;

    public Long saveFeedback(FeedbackRequest feedbackRequest, Authentication authentication) {
        Book book=bookRepository.findById(feedbackRequest.bookId())
                .orElseThrow(()->new EntityNotFoundException("Book not found"));
        if(book.isArchived()||!book.isAvailable()){
            throw new OperationNotValidException("You can not give a feedback to an archived book or no available book");
        }

        User user=(User) authentication.getPrincipal();
        if(Objects.equals(book.getOwner().getId(),user.getId())){
            throw new OperationNotValidException("You can not give a feedback to your own book");
        }
        Feedback feedback=toFeedback(feedbackRequest);
        return feedbackRepository.save(feedback).getId();
    }

    private Feedback toFeedback(FeedbackRequest feedbackRequest) {
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

    public PageResponse<FeedbackResponse> findAllFeedbackByBook(Long bookId, int page, int size, Authentication auth) {
        Pageable pageable= PageRequest.of(page, size);
        User user=(User) auth.getPrincipal();
        Page<Feedback> feedbacks=feedbackRepository.findAllByBookId(bookId, pageable);
        List<FeedbackResponse> responses=feedbacks.stream().map(f->toFeedbackResponse(f, user.getId()))
                .toList();
        return new PageResponse<>(
                responses,
                feedbacks.getNumber(),
                feedbacks.getSize(),
                feedbacks.getTotalElements(),
                feedbacks.getTotalPages(),
                feedbacks.isFirst(),
                feedbacks.isLast()
        );
    }

    private FeedbackResponse toFeedbackResponse(Feedback feedback, Long id) {
        return FeedbackResponse.builder()
                .note(feedback.getScore())
                .comment(feedback.getFeedback())
                .ownFeedback(Objects.equals(feedback.getCreatedBy(), id))
                .build();
    }
}
