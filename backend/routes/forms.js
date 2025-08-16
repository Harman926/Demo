const express = require("express");
const router = express.Router();
const Form = require("../models/Form");

// Create a form
router.post("/", async (req, res) => {
  try {
    const form = new Form(req.body);
    await form.save();
    res.json(form);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a form by ID
router.get("/:id", async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    res.json(form);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
