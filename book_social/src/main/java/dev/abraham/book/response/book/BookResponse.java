package dev.abraham.book.response.book;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class BookResponse {
    private Long id;
    private String title;
    private String authorName;
    private String isbn;
    private String synopsis;
    private String owner;
    private byte[] cover;
    private double rate;
    private boolean archived;
    private boolean shareable;
}
