package dev.abraham.book.service.auth;

import dev.abraham.book.request.auth.RegistrationRequest;
import jakarta.mail.MessagingException;

public interface IAuthenticationService {
    void register(RegistrationRequest registrationRequest) throws MessagingException;
}
