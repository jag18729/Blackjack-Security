const { Quote } = require('../models/quote.model');

module.exports.createQuote = (request, response) => {
  const { first_name, last_name, email, company, city, phone, location, service,description } = request.body;
  Quote.create({
    first_name,
    last_name,
    email,
    company,
    city,
    phone,
    location,
    service,
    description
  })
    .then(quote => response.json(quote))
    .catch(err => response.status(400).json(err));
}

module.exports.getAllQuotes = (request, response) => {
  Quote.find({})
    .then(quotes => response.json(quotes))
    .catch(err => response.status(400).json(err));
}

module.exports.getQuote = (request, response) => {
  Quote.findOne({ _id: request.params.id })
    .then(quote => response.json(quote))
    .catch(err => response.status(400).json(err));
}

module.exports.updateQuote = (request, response) => {
  Quote.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true, runValidators: true })
    .then(updatedQuote => response.json(updatedQuote))
    .catch(err => response.status(400).json(err));
}
module.exports.deleteQuote = (req, response) => {
  Quote.deleteOne({ _id: req.params.id })
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(err => response.status(400).json(err));
}