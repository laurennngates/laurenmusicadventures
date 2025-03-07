import { Request, Response } from 'express';
import { FileService } from '../services/fileService';

export class UploadController {
    private fileService: FileService;

    constructor() {
        this.fileService = new FileService();
    }

    public handleUpload = async (req: Request, res: Response): Promise<void> => {
        try {
            const files = req.files;
            if (!files || files.length === 0) {
                res.status(400).json({ message: 'No files uploaded.' });
                return;
            }

            const savedFiles = await this.fileService.saveFiles(files);
            res.status(200).json({ message: 'Files uploaded successfully.', files: savedFiles });
        } catch (error) {
            res.status(500).json({ message: 'Error uploading files.', error: error.message });
        }
    };
}