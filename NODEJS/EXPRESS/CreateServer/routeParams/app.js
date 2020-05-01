const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');

const PORT = process.env.PORT || 4001;

const spiceRack = [
  {
    id: 1,
    name: 'cardamom',
    grams: 45,
  },
  {
    id: 2,
    name: 'pimento',
    grams: 20,
  },
  {
    id: 3,
    name: 'cumin',
    grams: 450,
  },
  {
    id: 4,
    name: 'sichuan peppercorns',
    grams: 107,
  }
];
let nextSpiceId = 5;

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(errorHandler());

// Add your code here:
app.param('spiceId', (req, res, next, id) => {
  const spiceId = Number(id);
  const findSpice = spiceRack.find(spice => spice.id === spiceId);
  const spiceIndex = spiceRack.findIndex(spice => spice.id === spiceId);

  if (findSpice) {
    req.spiceId = spiceId;
    req.spice = findSpice;
    req.spiceIndex = spiceIndex;
    next();
  } else {
    res.status(404).send('Spice not found.');
  }
});


app.get('/spices/', (req, res, next) => {
  res.send(spiceRack);
});

app.post('/spices/', (req, res, next) => {
  const newSpice = { name: req.body.name, grams: req.body.grams };
  if (newSpice.name && newSpice.grams) {
    newSpice.id = nextSpiceId++;
    spiceRack.push(newSpice);
    res.send(newSpice);
  } else {
    res.status(400).send();
  }
});

app.get('/spices/:spiceId', (req, res, next) => {
  res.send(req.spice);
});

app.put('/spices/:spiceId', (req, res, next) => {
  spiceRack[req.spiceIndex].name = req.body.name;
  spiceRack[req.spiceIndex].grams = req.body.grams;
  res.send(spiceRack[req.spiceIndex]);
});

app.delete('/spices/:spiceId', (req, res, next) => {
  spiceRack.splice(req.spiceIndex, 1);
  res.status(204).send();
});

app.use((err, req, res, next) => {
  let errStatus = err.status || 500;
  res.status(errStatus).send();
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});