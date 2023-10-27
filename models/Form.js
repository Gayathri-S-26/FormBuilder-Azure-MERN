// models/Form.js

const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  title: { type: String, required: true },
  elements: [{ type: mongoose.Schema.Types.Mixed }], // Always store elements as an array
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
