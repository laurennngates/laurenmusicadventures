# Media Upload Server

This project is a simple server application that allows users to upload pictures and videos to a designated location on the server. It is built using TypeScript and Express.

## Project Structure

```
media-upload-server
├── src
│   ├── app.ts                  # Entry point of the application
│   ├── controllers
│   │   └── uploadController.ts  # Handles file upload logic
│   ├── routes
│   │   └── uploadRoutes.ts      # Defines upload routes
│   ├── services
│   │   └── fileService.ts       # Contains file handling logic
│   └── types
│       └── index.ts             # Type definitions for requests and responses
├── uploads                       # Directory for storing uploaded files
├── package.json                  # NPM package configuration
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd media-upload-server
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the server:**
   ```
   npm start
   ```

## Usage

To upload a file, send a POST request to `/upload` with the file included in the form data. The server will handle the upload and store the file in the `uploads` directory.

## Dependencies

- Express: Web framework for Node.js
- Multer: Middleware for handling multipart/form-data, which is used for uploading files

## License

This project is licensed under the MIT License.