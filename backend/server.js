// backend/server.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

// Create the multer upload instance
const upload = multer({ storage });

// Serve the uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// File upload route
app.post('/api/upload', upload.array('files'), (req, res) => {
  if (!req.files) {
    return res.status(400).json({ error: 'No files provided' });
  }

  const fileCount = req.files.length;
  res.json({ message: `${fileCount} file(s) uploaded successfully` });
});

// File count route
app.get('/api/file-count', (req, res) => {
  const uploadDir = path.join(__dirname, 'uploads');
  fs.readdir(uploadDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Error reading upload directory' });
    }
    res.json({ fileCount: files.length });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});