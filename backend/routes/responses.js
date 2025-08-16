const express = require("express");
const router = express.Router();
const Response = require("../models/Response");

// Submit form response
router.post("/", async (req, res) => {
  try {
    const response = new Response(req.body);
    await response.save();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get responses of a form
router.get("/:formId", async (req, res) => {
  try {
    const responses = await Response.find({ formId: req.params.formId });
    res.json(responses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
