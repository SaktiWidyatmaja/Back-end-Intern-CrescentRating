const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config()

const app = express();

// Connect to local db
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');

    app.use(express.json())

    const constactListRouter = require('./routes/contact-list')
    app.use('/contact-list', constactListRouter)

    // Jalankan server Express setelah berhasil terhubung ke MongoDB
    app.listen(3000, () => {
      console.log('Server running on port 3000');
    });
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error);
  });
