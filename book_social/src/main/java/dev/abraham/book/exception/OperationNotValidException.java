package dev.abraham.book.exception;

public class OperationNotValidException extends RuntimeException {
    public OperationNotValidException(String message) {
        super(message);
    }
}
