const mongoose = require('mongoose');


const fileSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  fileType: { type: String, required: true },
  url: { type: String, required: true },
});

// Define subcard schema
const subcardSchema = new mongoose.Schema({
  SubId: { type: String, required: true }, 
  Attachment: { type: Number, required: true },
  files: [fileSchema], 
});

// Define card schema
const cardSchema = new mongoose.Schema({
  ID: { type: String, required: true }, 
  subcard: [subcardSchema], 
  createdAt: { type: Date, default: Date.now },
});

// Create and export the Card model
const Card = mongoose.model('Card', cardSchema);
module.exports = Card;
