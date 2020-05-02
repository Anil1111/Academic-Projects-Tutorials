const express = require('express');
const app = express();
const morgan = require('morgan');
const errorhandler = require('errorhandler');
const bodyParser = require('body-parser');
const cors = require('cors');

module.exports = app;

/* Do not change the following line! It is required for testing and allowing
*  the frontend application to interact as planned with the api server
*/
const PORT = process.env.PORT || 4001;


// Add middleware for handling CORS requests from index.html
app.use(errorhandler());
app.use(cors());
app.use(morgan('dev'));

// Add middware for parsing request bodies here:
// app.use(bodyParser());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Mount your existing apiRouter below at the '/api' path.
const apiRouter = require('./server/api');
app.use('/api', apiRouter);



//error handler
app.use((err, req, res, next) => {
  let errCode = err.status || 500;
  res.status(500).send(err.message);
});

// This conditional is here for testing purposes:
if (!module.parent) {
  // Add your code to start the server listening at PORT below:
  app.listen(PORT, () => {
    console.log('Server listening at 4001..');
  })
}
