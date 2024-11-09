// index.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Card = require('./model/Card');
const cardRoutes = require('./routes/card'); // Add this import


dotenv.config();
const app = express();

// Middleware
app.use(express.json());


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Failed to connect to MongoDB', err));

// Routes
app.use('/api', cardRoutes); // Add this line to use the routes
app.use('/uploads', express.static('uploads'));

// Create a new card
app.post('/cards', async (req, res) => {
  const { ID, subcard } = req.body;
  try {
    const card = new Card({ ID, subcard });
    const savedCard = await card.save();
    res.status(201).json(savedCard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all cards
app.get('/cards', async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a card by ID
app.get('/cards/:id', async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);
    if (!card) return res.status(404).json({ message: 'Card not found' });
    res.json(card);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a card by ID
app.put('/cards/:id', async (req, res) => {
  try {
    const card = await Card.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!card) return res.status(404).json({ message: 'Card not found' });
    res.json(card);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a card by ID
app.delete('/cards/:id', async (req, res) => {
  try {
    const card = await Card.findByIdAndDelete(req.params.id);
    if (!card) return res.status(404).json({ message: 'Card not found' });
    res.json({ message: 'Card deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
