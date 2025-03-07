export interface FileUploadRequest {
    files: Express.Multer.File[];
    userId: string;
}

export interface FileUploadResponse {
    message: string;
    fileUrls: string[];
}