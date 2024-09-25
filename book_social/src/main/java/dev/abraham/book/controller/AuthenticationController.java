package dev.abraham.book.controller;

import dev.abraham.book.request.RegistrationRequest;
import dev.abraham.book.response.APIResponse;
import dev.abraham.book.service.auth.AuthenticationService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.mail.MessagingException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("auth")
@Tag(name="Authentication")
public class AuthenticationController {
    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<APIResponse> register(@RequestBody @Valid RegistrationRequest request){
        try {
            authenticationService.register(request);
            return ResponseEntity.ok(new APIResponse( "User registered successfully", null));
        } catch (MessagingException e) {
            return ResponseEntity.ok(new APIResponse("User registration failed", null));
        }
    }
}
