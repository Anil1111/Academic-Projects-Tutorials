const express = require('express');
const minionsRouter = express.Router();
const { getAllFromDatabase, addToDatabase, getFromDatabaseById, updateInstanceInDatabase, deleteFromDatabasebyId } = require('./db');

minionsRouter.param('minionId', (req, res, next, id) => {
  req.minionId = id;
  // const minionIndex = getAllFromDatabase('minions').findIndex(minion => minion.id === req.id);
  const checkMinionPresent = getFromDatabaseById('minions', req.minionId);
  checkMinionPresent ? next() : res.status(404).send('the Minion ID not found!');
});

minionsRouter.param('workId', (req, res, next, id) => {
  req.workId = id;
  const checkWorkPresent = getFromDatabaseById('work', req.workId);
  checkWorkPresent ? next() : res.status(404).send('the Work ID not found!');
});

// Minion Router
minionsRouter.get('/', (req, res, next) => {
  res.send(getAllFromDatabase('minions'));
});

minionsRouter.post('/', (req, res, next) => {
  res.status(201).send(addToDatabase('minions', req.body));
});

minionsRouter.get('/:minionId', (req, res, next) => {
  res.send(getFromDatabaseById('minions', req.minionId));
});

minionsRouter.put('/:minionId', (req, res, next) => {
  res.send(updateInstanceInDatabase('minions', req.body));
});

minionsRouter.delete('/:minionId', (req, res, next) => {
  deleteFromDatabasebyId('minions', req.minionId);
  res.status(204).send();
});

//Work 
minionsRouter.get('/:minionId/work', (req, res, next) => {
  const allWork = getAllFromDatabase('work').filter(work => work.minionId === req.minionId);
  res.send(allWork);
});

minionsRouter.post('/:minionId/work', (req, res, next) => {
  const workToAdd = req.body;
  workToAdd.id = req.minionId;
  res.status(201).send(addToDatabase('work', workToAdd));
});

minionsRouter.put('/:minionId/work/:workId', (req, res, next) => {
  if (req.minionId !== req.workId) {
    res.status(400).send();
  } else {
    res.send(updateInstanceInDatabase('work', req.body));
  }

});

minionsRouter.delete('/:minionId/work/:workId', (req, res, next) => {
  const deleted = deleteFromDatabasebyId('work', req.workId);
  if (deleted) {
    res.status(204);
  } else {
    res.status(500);
  }
  res.send();
});

module.exports = minionsRouter;