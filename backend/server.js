const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const Card = require('./model/Card');
const cardRoutes = require('./routes/card');

dotenv.config();

const app = express();


app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

// Routes
app.use('/api', cardRoutes); 



app.get('/api/cards/:id', async (req, res) => {
  try {
    
    const card = await Card.findOne({ ID: req.params.id });
    if (!card) {
      return res.status(404).json({ message: 'Card not found' });
    }
    console.log(card)
    res.json(card);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
