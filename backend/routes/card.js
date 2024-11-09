const express = require("express");
const multer = require("multer");
const Card = require("../model/Card");

const router = express.Router();

// Configure multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// Endpoint to add files to subcard
router.post(
  "/cards/:id/subcards/:subId/files",
  upload.array("files"),
  async (req, res) => {
    try {
      const { id, subId } = req.params;
      const files = req.files.map((file) => ({
        filename: file.originalname,
        fileType: file.mimetype,
        url: `/uploads/${file.filename}`,
      }));

      let card = await Card.findOne({ ID: id });

      if (card) {
        let subcard = card.subcard.find((sub) => sub.SubId === subId);
        if(subcard){
          subcard.files.push(...files);
          subcard.Attachment = subcard.files.length;
          await card.save();
        }
        else{
          const newSubcard = {
            SubId: subId,
            Attachment: files.length,
            files: files,
          };
          card.subcard.push(newSubcard);
          await card.save();
        }
      }
    
      if (!card) {
        // Create new subcard
        const newSubcard = {
          SubId: subId,
          Attachment: files.length,
          files: files,
        };

        card = new Card({
          ID: id,
          subcard: [newSubcard],
        });
        await card.save();
      }

      res.status(200).json(card);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  }
);

module.exports = router;
