const express = require('express')
const router = express.Router()
const ContactList = require('../models/contact-list')

// Getting all
router.get('/', async (req, res) => {
  try {
    const contactLists = await ContactList.find()
    res.status(200).json(contactLists)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Getting One
router.get('/:id', getContactList, (req, res) => {
  res.status(200).json(res.contactList)
})

// Creating one
router.post('/', async (req, res) => {
  const contactList = new ContactList({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    numberPhone: req.body.numberPhone,
    address: req.body.address
  })
  try {
    const newContactList = await contactList.save()
    res.status(201).json(newContactList)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Updating One
router.patch('/:id', getContactList, async (req, res) => {
  Object.assign(res.contactList, req.body);

  try {
    const updatedContactList = await res.contactList.save()
    res.status(200).json(updatedContactList)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Deleting One
router.delete('/:id', getContactList, async (req, res) => {
  try {
    await res.contactList.deleteOne();  // Delete document
    res.status(200).json({ message: 'Deleted ContactList' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getContactList(req, res, next) {
  let contactList
  try {
    contactList = await ContactList.findById(req.params.id)
    if (contactList == null) {
      return res.status(404).json({ message: 'Cannot find contactList' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.contactList = contactList
  next()
}

module.exports = router