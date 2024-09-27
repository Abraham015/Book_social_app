package dev.abraham.book.controller;

import dev.abraham.book.request.auth.AuthenticationRequest;
import dev.abraham.book.request.auth.RegistrationRequest;
import dev.abraham.book.response.APIResponse;
import dev.abraham.book.service.auth.AuthenticationService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.mail.MessagingException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR;

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
        } catch (Exception e) {
            return ResponseEntity.status(INTERNAL_SERVER_ERROR).body(new APIResponse("User registration failed", null));
        }
    }

    @PostMapping("/authenticate")
    public ResponseEntity<APIResponse> authenticate(@RequestBody @Valid AuthenticationRequest request){
        try {
            APIResponse response=authenticationService.authenticate(request);
            if(response.getData()!=null){
                return ResponseEntity.ok(new APIResponse( "Login success", null));
            }
            return ResponseEntity.status(INTERNAL_SERVER_ERROR).body(new APIResponse("Login failed", null));
        } catch (Exception e) {
            return ResponseEntity.status(INTERNAL_SERVER_ERROR).body(new APIResponse("Login failed", null));
        }
    }

    @GetMapping("/active-account")
    public ResponseEntity<APIResponse> activeAccount(@RequestParam String token){
        try {
            authenticationService.activateAccount(token);
            return ResponseEntity.ok(new APIResponse( "Activation success", null));
        } catch (MessagingException | RuntimeException e) {
            return ResponseEntity.status(INTERNAL_SERVER_ERROR).body(new APIResponse("Activation failed", null));
        }
    }
}
