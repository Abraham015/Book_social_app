package dev.abraham.book.service.auth;

import dev.abraham.book.model.User;
import dev.abraham.book.request.RegistrationRequest;
import jakarta.mail.MessagingException;

public interface IAuthenticationService {
    void register(RegistrationRequest registrationRequest) throws MessagingException;
}
