const mongoose = require("mongoose");

const ResponseSchema = new mongoose.Schema({
  formId: { type: mongoose.Schema.Types.ObjectId, ref: "Form" },
  answers: [{ questionId: String, answer: mongoose.Schema.Types.Mixed }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Response", ResponseSchema);
