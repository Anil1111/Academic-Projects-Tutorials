// models/quote
const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
  quote: String,
  attributed: String,
  source: String
});

const Quote = mongoose.model('Quote', QuoteSchema);

module.exports = Quote;