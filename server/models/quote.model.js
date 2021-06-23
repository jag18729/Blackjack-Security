const mongoose = require('mongoose');
const QuoteSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "Please enter your first name."],
    minlength: [3, "First name must be at least 3 characters."]
  },
  last_name: {
    type: String,
    required: [true, "Please enter your last name."],
    minlength: [3, "Last name must be at least 3 characters."]
  },
  email: {
    type: String,
    required: [true, "Please enter your email address."],
  },
  company: {
    type: String,
  },
  city: {
    type: String,
    minlength: [3, "City must be at least 3 characters."]
  },
  phone: {
    type: String,
    minlength: [3, "Phone number must be at least 10 digits."],
  },
  location: {
    type: String,
    required: [true, "Please enter a location."],
  },
  service: {
    type: String,
    required: [true, "Please select a service."],
  },
  description: {
    type: String,
  },
}, { timestamps: true });


module.exports.Quote = mongoose.model("Quote", QuoteSchema);