const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  type: { type: String, required: true }, // 'categorized', 'cloze', 'comprehension'
  text: String,
  image: String,
  options: [String], // For categorized or MCQs
  categories: [String], // Only for categorized
  blanks: [String], // Only for cloze
});

const FormSchema = new mongoose.Schema({
  title: String,
  headerImage: String,
  questions: [QuestionSchema],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Form", FormSchema);
