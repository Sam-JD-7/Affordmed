const mongoose = require('mongoose');

const trainSchema = new mongoose.Schema({
  trainNumber: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  seatsAvailability: { type: Number, required: true },
  departureTime: { type: Date, required: true },
});

const Train = mongoose.model('Train', trainSchema);

module.exports = Train;