import fs from 'fs';
import path from 'path';
import { Request } from 'express';

export class FileService {
    private uploadDir: string;

    constructor() {
        this.uploadDir = path.join(__dirname, '../../uploads');
        this.createUploadDir();
    }

    private createUploadDir() {
        if (!fs.existsSync(this.uploadDir)) {
            fs.mkdirSync(this.uploadDir, { recursive: true });
        }
    }

    public saveFile(file: Express.Multer.File): string {
        const filePath = path.join(this.uploadDir, file.originalname);
        fs.writeFileSync(filePath, file.buffer);
        return filePath;
    }

    public validateFileType(file: Express.Multer.File): boolean {
        const allowedTypes = ['image/jpeg', 'image/png', 'video/mp4'];
        return allowedTypes.includes(file.mimetype);
    }
}