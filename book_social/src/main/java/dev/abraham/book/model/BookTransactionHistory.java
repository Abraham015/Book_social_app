package dev.abraham.book.model;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@Getter
@Setter
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class BookTransactionHistory extends BaseEntity {
    private boolean returned;
    private boolean returnApproved;
    @ManyToOne
    @JoinColumn(name = "userId")
    private User users;
    @ManyToOne
    @JoinColumn(name = "book_id")
    private Book book;
}
