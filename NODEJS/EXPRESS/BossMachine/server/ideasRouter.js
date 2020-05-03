const express = require('express');
const ideasRouter = express.Router();
const { getAllFromDatabase, addToDatabase, getFromDatabaseById, updateInstanceInDatabase, deleteFromDatabasebyId } = require('./db');
const checkMillionDollarIdea = require('./checkMillionDollarIdea');

ideasRouter.param('ideaId', (req, res, next, id) => {
  req.ideaId = id;
  const checkIdeaPresent = getFromDatabaseById('ideas', req.ideaId);
  checkIdeaPresent ? next() : res.status(404).send('the Idea ID not found!');
});

//Ideas
ideasRouter.get('/', (req, res, next) => {
  res.send(getAllFromDatabase('ideas'));
});

ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
  res.status(201).send(addToDatabase('ideas', req.body));
});

ideasRouter.get('/:ideaId', (req, res, next) => {
  res.send(getFromDatabaseById('ideas', req.ideaId));
});

ideasRouter.put('/:ideaId', checkMillionDollarIdea, (req, res, next) => {
  res.send(updateInstanceInDatabase('ideas', req.body));
});

ideasRouter.delete('/:ideaId', (req, res, next) => {
  deleteFromDatabasebyId('ideas', req.ideaId);
  res.status(204).send();
});

module.exports = ideasRouter;