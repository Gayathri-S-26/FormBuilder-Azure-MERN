//server.js
const mongoose = require('mongoose');
const app = require('./app');
const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 5000;
const MONGO_URI = 'mongodb+srv://gayathriselvaraj:SzEn8l4fgBe3eZJ6@cluster0.yprbnoz.mongodb.net/form_builder_db';


mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
  app.use(express.static('./client/build'));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build",     
    "index.html"));
 });
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});
