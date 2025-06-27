const express = require("express")
const router = express.Router()
const Contact = require("../models/Contact")

// Get all contacts
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 })
    res.json(contacts)
  } catch (err) {
    
    res.status(500).json({ message: err.message })
  }
})

// Get single contact
router.get("/:id", async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id)
    if (!contact) return res.status(404).json({ message: "Contact not found" })
    res.json(contact)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Create contact
router.post("/", async (req, res) => {
  console.log(req.body);
  const contact = new Contact({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address || "",
    category: req.body.category || "Others",
  })

  try {
    const newContact = await contact.save()
    res.status(201).json(newContact)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Update contact
router.put("/:id", async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id)
    if (!contact) return res.status(404).json({ message: "Contact not found" })

    if (req.body.name) contact.name = req.body.name
    if (req.body.email) contact.email = req.body.email
    if (req.body.phone) contact.phone = req.body.phone
    if (req.body.address !== undefined) contact.address = req.body.address

    const updatedContact = await contact.save()
    res.json(updatedContact)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Delete contact
router.delete("/:id", async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id)
    if (!contact) return res.status(404).json({ message: "Contact not found" })

    await contact.deleteOne()
    res.json({ message: "Contact deleted" })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router
