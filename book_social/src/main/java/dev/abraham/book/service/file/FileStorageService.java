package dev.abraham.book.service.file;

import dev.abraham.book.model.Book;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
@RequiredArgsConstructor
@Slf4j
public class FileStorageService {
    @Value("${application.file.upload.photos-output-path}")
    private String fileUploadPath;
    public String saveFile(@NonNull MultipartFile file, @NonNull Long userId) {
        final String filePath="user"+ File.separator+userId;
        return uploadFile(file, filePath);
    }

    private String uploadFile(@NonNull MultipartFile file, @NonNull String filePath) {
        final String finalUploadPath=fileUploadPath+File.separator+filePath;
        File targetFolder=new File(finalUploadPath);
        if(!targetFolder.exists()) {
            boolean folderCreated=targetFolder.mkdirs();
            if(!folderCreated) {
                log.warn("Failed to create the target folder");
                return null;
            }
        }

        final String fileExtension=getFileExtension(file.getOriginalFilename());
        String targetFilePath=finalUploadPath+File.separator+System.currentTimeMillis()+"."+fileExtension;
        Path targetPath= Paths.get(targetFilePath);
        try{
            Files.write(targetPath, file.getBytes());
            log.info("File is saved");
            return targetFilePath;
        } catch (IOException e){
            log.error(e.getMessage());
            return null;
        }
    }

    private String getFileExtension(String fileName) {
        if(fileName==null|| fileName.isEmpty()) {
            return null;
        }

        int lastIndex=fileName.lastIndexOf(".");
        if(lastIndex<1) {
            return null;
        }
        return fileName.substring(lastIndex+1).toLowerCase();
    }
}
