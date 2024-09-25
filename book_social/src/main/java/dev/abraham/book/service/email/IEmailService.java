package dev.abraham.book.service.email;

import dev.abraham.book.enums.EmailTemplateName;
import jakarta.mail.MessagingException;

public interface IEmailService {
    void sendEmail(String to, String username, EmailTemplateName emailTemplate, String confirmationUrl, String activationCode, String subject) throws MessagingException;
}
