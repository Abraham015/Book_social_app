package dev.abraham.book.repository;

import dev.abraham.book.model.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

public interface BookRepository extends JpaRepository<Book, Long>, JpaSpecificationExecutor<Book> {
    @Query("SELECT b FROM Book b WHERE b.archived=false AND b.available=true AND b.owner.id!=:id")
    Page<Book> findAllDisplayableBooks(Pageable pageable, Long id);
}
