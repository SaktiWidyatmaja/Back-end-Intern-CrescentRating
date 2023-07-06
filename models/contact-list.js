const mongoose = require('mongoose');

// Define the schema for the Contact model
const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  numberPhone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

// Create the Contact model based on the schema
const ContactList = mongoose.model('ContactList', contactSchema);

module.exports = ContactList;