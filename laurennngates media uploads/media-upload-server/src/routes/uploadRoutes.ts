import { Router } from 'express';
import { UploadController } from '../controllers/uploadController';

const router = Router();
const uploadController = new UploadController();

export function setUploadRoutes() {
    router.post('/upload', uploadController.handleUpload.bind(uploadController));
    return router;
}