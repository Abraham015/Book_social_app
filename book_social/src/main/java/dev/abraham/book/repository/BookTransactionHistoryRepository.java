package dev.abraham.book.repository;

import dev.abraham.book.model.BookTransactionHistory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface BookTransactionHistoryRepository extends JpaRepository<BookTransactionHistory, Long> {
    @Query("SELECT h FROM BookTransactionHistory h WHERE h.users.id=:id")
    Page<BookTransactionHistory> findAllBorrowedBooks(Pageable pageable, Long id);
    @Query("SELECT h FROM BookTransactionHistory h WHERE h.book.owner.id=:id ")
    Page<BookTransactionHistory> findAllReturnedBooks(Pageable pageable, Long id);
}
