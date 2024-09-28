package dev.abraham.book.service.auth;

import dev.abraham.book.request.auth.AuthenticationRequest;
import dev.abraham.book.request.auth.RegistrationRequest;
import dev.abraham.book.response.APIResponse;
import jakarta.mail.MessagingException;

public interface IAuthenticationService {
    void register(RegistrationRequest registrationRequest) throws MessagingException;
    void activateAccount(String token) throws MessagingException;
    APIResponse authenticate(AuthenticationRequest authenticationRequest);

}
