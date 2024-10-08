package dev.abraham.book.dto;

import lombok.Data;

@Data
public class BookDTO {
    private Long id;
    private String title;
    private String authorName;
    private String isbn;
    private String synopsis;
    private String owner;
    private byte[] cover;
    private double rate;
    private boolean archived;
    private boolean available;
}
