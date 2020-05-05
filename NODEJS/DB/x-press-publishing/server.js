const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const errorhandler = require('errorhandler');
const apiRouter = require('./api/api');


const PORT = process.env.PORT || 4001;
app.use(errorhandler());
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/api', apiRouter);



app.use((err, req, res, next) => {
  errCode = err.Status || 500;
  res.send(errCode).send(err.message);
});

app.listen(PORT, () => {
  console.log("Server listening on port 4001...");
});

module.exports = app;