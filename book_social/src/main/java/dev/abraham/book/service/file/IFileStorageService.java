package dev.abraham.book.service.file;

import lombok.NonNull;
import org.springframework.web.multipart.MultipartFile;

public interface IFileStorageService {
    String saveFile(@NonNull MultipartFile file, @NonNull Long userId);
}
