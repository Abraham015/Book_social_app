package dev.abraham.book.repository;

import dev.abraham.book.model.BookTransactionHistory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface BookTransactionHistoryRepository extends JpaRepository<BookTransactionHistory, Long> {
    @Query("SELECT h FROM BookTransactionHistory h WHERE h.users.id=:id")
    Page<BookTransactionHistory> findAllBorrowedBooks(Pageable pageable, Long id);
    @Query("SELECT h FROM BookTransactionHistory h WHERE h.book.owner.id=:id ")
    Page<BookTransactionHistory> findAllReturnedBooks(Pageable pageable, Long id);
    @Query("SELECT (COUNT(*)>0) AS isAvailable FROM BookTransactionHistory h WHERE h.users.id=:id AND h.book.id=:bookId AND h.returnApproved=false")
    boolean isAvailable(Long bookId, Long id);
    @Query("SELECT t FROM BookTransactionHistory t WHERE t.book.id=:bookId AND t.users.id=:id AND t.returned=false AND t.returnApproved=false")
    Optional<BookTransactionHistory> findByBookIdAndUserId(Long bookId, Long id);
    @Query("SELECT t FROM BookTransactionHistory t WHERE t.book.id=:bookId AND t.book.owner.id=:id AND t.returned=true AND t.returnApproved=false")
    Optional<BookTransactionHistory> findByBookIdAndOwnerId(Long bookId, Long id);
}