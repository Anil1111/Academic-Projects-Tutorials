const { getElementById, seedElements, updateElement, getIndexById, createElement } = require('./util');
const express = require('express');
const expressionsRouter = express.Router();

const expressions = [];
seedElements(expressions, 'expressions');


//Expressions Request --------------------------------
//GET request
expressionsRouter.get('/', (req, res, next) => {
  res.send(expressions);
});

//GET Route Params
expressionsRouter.get('/:id', (req, res, next) => {
  const foundExpression = getElementById(req.params.id, expressions);
  if (foundExpression) {
    res.send(foundExpression);
  } else {
    res.status(404).send('No item found!');
  }
});

//PUT Request
expressionsRouter.put('/:id', (req, res, next) => {
  const expressionIndex = getIndexById(req.params.id, expressions);
  if (expressionIndex !== -1) {
    updateElement(req.params.id, req.query, expressions);
    res.send(expressions[expressionIndex]);
  } else {
    res.status(404).send();
  }
})

//Post
expressionsRouter.post('/', (req, res, next) => {
  const receivedExpression = createElement('expressions', req.query);
  if (receivedExpression) {
    expressions.push(receivedExpression);
    res.status(201).send(receivedExpression);
  } else {
    res.status(404).send();
  }
});

//Delete
expressionsRouter.delete('/:id', (req, res, next) => {
  const idPresent = getIndexById(req.params.id, expressions);
  console.log(expressions);
  if (idPresent !== -1) {
    expressions.splice(idPresent, 1);
    console.log(expressions);
    res.status(204).send();
  } else {
    res.status(404).send('No such item');
  }
});

module.exports = expressionsRouter;