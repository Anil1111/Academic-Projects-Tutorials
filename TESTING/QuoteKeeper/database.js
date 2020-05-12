// database.js

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const env = process.env.NODE_ENV || 'development';
const databaseUrl = process.env.DATABASE_URL || `mongodb://localhost/quote-keeper_${env}`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

module.exports = {
  mongoose,
  databaseUrl,
  options,
};


