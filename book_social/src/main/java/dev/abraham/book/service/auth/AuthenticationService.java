package dev.abraham.book.service.auth;

import dev.abraham.book.enums.EmailTemplateName;
import dev.abraham.book.model.Role;
import dev.abraham.book.model.Token;
import dev.abraham.book.model.User;
import dev.abraham.book.repository.RoleRepository;
import dev.abraham.book.repository.TokenRepository;
import dev.abraham.book.repository.UserRepository;
import dev.abraham.book.request.RegistrationRequest;
import dev.abraham.book.service.email.EmailService;
import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthenticationService implements IAuthenticationService {
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final TokenRepository tokenRepository;
    private final EmailService emailService;
    @Value("${application.security.mailing.frontend.activation-url}")
    private String activationUrl;

    public void register(RegistrationRequest request) throws MessagingException {
        Role userRole=roleRepository.findByName("USER")
                .orElseThrow(()->new IllegalArgumentException("User Role not found"));
        User user= User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .accountLocked(false)
                .enabled(false)
                .roles(List.of(userRole))
                .build();
        userRepository.save(user);
        sendValidationEmail(user);
    }

    private void sendValidationEmail(User user) throws MessagingException {
        String newToken=generateAndSaveActivationToken(user);
        emailService.sendEmail(user.getEmail(),user.getFullName(), EmailTemplateName.ACTIVATE_ACCOUNT, activationUrl,newToken, "Account activation");
    }

    private String generateAndSaveActivationToken(User user) {
        //Generate a token
        String tokenGenerated=generateActivationToken(6);
        //We save the token
        Token token= Token.builder()
                .token(tokenGenerated)
                .createdAt(LocalDateTime.now())
                .expiresAt(LocalDateTime.now().plusMinutes(15))
                .user(user)
                .build();
        tokenRepository.save(token);
        return tokenGenerated;
    }

    private String generateActivationToken(int length) {
        String characters="0123456789";
        StringBuilder codeBuilder=new StringBuilder();
        SecureRandom secureRandom=new SecureRandom();
        for(int i=0;i<length;i++){
            codeBuilder.append(characters.charAt(secureRandom.nextInt(characters.length())));
        }
        return codeBuilder.toString();
    }
}
