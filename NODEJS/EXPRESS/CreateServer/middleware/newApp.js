const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorhandler = require('errorhandler');

const PORT = process.env.PORT || 4001;

const cards = [
  {
    id: 1,
    suit: 'Clubs',
    rank: '2'
  },
  {
    id: 2,
    suit: 'Diamonds',
    rank: 'Jack'
  },
  {
    id: 3,
    suit: 'Hearts',
    rank: '10'
  }
];
let nextId = 4;

//Error Handler
app.use(errorhandler());

//Parser
app.use(bodyParser.json());

// Logging
if (!process.env.IS_TEST_ENV) {
  app.use(morgan('short'));
}

const validCard = (req, res, next) => {
  const newCard = req.body;
  const validSuits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
  const validRanks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
  if (validSuits.indexOf(newCard.suit) === -1 || validRanks.indexOf(newCard.rank) === -1) {
    return res.status(400).send('Invalid card!');
  }
  req.newCard = newCard;
  next();
};

const findCard = (req, res, next) => {
  const cardId = Number(req.params.cardId);
  const cardIndex = cards.findIndex(card => card.id === cardId);
  if (cardIndex === -1) {
    return res.status(404).send('Card not found');
  }
  req.cardId = cardId;
  next();
}

// // Parsing
// app.use((req, res, next) => {
//   let bodyData = '';
//   req.on('data', (data) => {
//     bodyData += data;
//   });
//   req.on('end', () => {
//     if (bodyData) {
//       req.body = JSON.parse(bodyData);
//     }

//   });
// });

// Get all Cards
app.get('/cards/', (req, res, next) => {
  res.send(cards);
});

// Create a new Card
app.post('/cards/', validCard, (req, res, next) => {
  req.newCard.id = nextId++;
  cards.push(req.newCard);
  res.status(201).send(req.newCard);
});

// Get a single Card
app.get('/cards/:cardId', findCard, (req, res, next) => {
  res.send(cards[req.cardId]);
});

// Update a Card
app.put('/cards/:cardId', findCard, validCard, (req, res, next) => {
  if (!req.newCard.id || req.newCard.id !== req.cardId) {
    req.newCard.id = req.cardId;
  }
  cards[req.cardId] = req.newCard;
  res.send(req.newCard);
});

// Delete a Card
app.delete('/cards/:cardId', findCard, (req, res, next) => {
  cards.splice(req.cardId, 1);
  res.status(204).send();
});


app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
