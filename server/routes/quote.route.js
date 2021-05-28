const QuoteController = require('../controllers/controller.quote');

module.exports = function (app) {
  app.post('/api/quote/new', QuoteController.createQuote);
  app.get('/api/quotes', QuoteController.getAllQuotes);
  app.get('/api/quote/:id', QuoteController.getQuote);
  app.put('/api/quote/:id', QuoteController.updateQuote);
  app.delete('/api/quote/:id', QuoteController.deleteQuote);
}