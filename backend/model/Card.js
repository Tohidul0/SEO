const mongoose = require('mongoose');

// Define file schema for better clarity
const fileSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  fileType: { type: String, required: true },
  url: { type: String, required: true },
});

// Define subcard schema
const subcardSchema = new mongoose.Schema({
  SubId: { type: String, required: true }, // Change to String for better flexibility
  Attachment: { type: Number, required: true },
  files: [fileSchema], // Array of file objects
});

// Define card schema
const cardSchema = new mongoose.Schema({
  ID: { type: String, required: true }, // Change to String for better flexibility
  subcard: [subcardSchema], // Array of subcard objects
  createdAt: { type: Date, default: Date.now },
});

// Create and export the Card model
const Card = mongoose.model('Card', cardSchema);
module.exports = Card;
