import express from 'express';
import multer from 'multer';
import { setUploadRoutes } from './routes/uploadRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for handling file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Initialize routes
setUploadRoutes(app, upload);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});