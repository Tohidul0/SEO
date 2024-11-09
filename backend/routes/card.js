// routes/cards.js
const express = require('express');
const multer = require('multer');
const Card = require('../model/Card');

const router = express.Router();

// Configure multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

// Endpoint to add files to subcard
router.post('/cards/:id/subcards/:subId/files', upload.array('files'), async (req, res) => {
    try {
      const { id, subId } = req.params;
      console.log(req.files);
  
      const files = req.files.map((file) => ({
        filename: file.originalname,
        fileType: file.mimetype,
        url: `/uploads/${file.filename}`,
      }));
  
      // Updated query to match 'ID' and 'SubId' in your schema, not '_id'
      const card = await Card.findOneAndUpdate(
        { ID: id, 'subcard.SubId': subId }, // Match using 'ID' and 'SubId'
        { $push: { 'subcard.$.files': { $each: files } } },
        { new: true }
      );
  
      if (!card) {
        return res.status(404).json({ error: 'Card or Subcard not found' });
      }
  
      res.status(200).json(card);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  });
  

module.exports = router;
