
const express = require('express');
const app = express();
const expressionsRouter = require('./expressionsRouter.js');
const animalsRouter = require('./animalsRouter.js');

const PORT = process.env.PORT || 3000;

app.use('/animals', animalsRouter);
app.use('/expressions', expressionsRouter);

// Listening...
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
