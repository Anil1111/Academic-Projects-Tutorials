const express = require('express');
const apiRouter = express.Router();
const { getAllFromDatabase, addToDatabase, getFromDatabaseById, updateInstanceInDatabase, deleteFromDatabasebyId, deleteAllFromDatabase, createMeeting } = require('./db');

apiRouter.param('minionId', (req, res, next, id) => {
  req.minionId = id;
  // const minionIndex = getAllFromDatabase('minions').findIndex(minion => minion.id === req.id);
  const checkMinionPresent = getFromDatabaseById('minions', req.minionId);
  checkMinionPresent ? next() : res.status(404).send('the Minion ID not found!');
});

apiRouter.param('ideaId', (req, res, next, id) => {
  req.ideaId = id;
  const checkIdeaPresent = getFromDatabaseById('ideas', req.ideaId);
  checkIdeaPresent ? next() : res.status(404).send('the Idea ID not found!');
});

apiRouter.param('workId', (req, res, next, id) => {
  req.workId = id;
  const checkWorkPresent = getFromDatabaseById('work', req.workId);
  checkWorkPresent ? next() : res.status(404).send('the Work ID not found!');
});

// Minion Router
apiRouter.get('/minions', (req, res, next) => {
  res.send(getAllFromDatabase('minions'));
});

apiRouter.post('/minions', (req, res, next) => {
  res.send(addToDatabase('minions', req.body.minion));
});

apiRouter.get('/minions/:minionId', (req, res, next) => {
  res.send(getFromDatabaseById('minions', req.minionId));
});

apiRouter.put('/minions/:minionId', (req, res, next) => {
  res.send(updateInstanceInDatabase('minions', req.body.minion));
});

apiRouter.delete('/minions/:minionId', (req, res, next) => {
  deleteFromDatabasebyId('minions', req.minionId);
  res.status(204).send();
});


//Ideas
apiRouter.get('/ideas', (req, res, next) => {
  res.send(getAllFromDatabase('ideas'));
});

apiRouter.post('/ideas', (req, res, next) => {
  res.send(addToDatabase('ideas', req.body.idea));
});

apiRouter.get('/ideas/:ideaId', (req, res, next) => {
  res.send(getFromDatabaseById('ideas', req.ideaId));
});

apiRouter.put('/ideas/:ideaId', (req, res, next) => {
  res.send(updateInstanceInDatabase('ideas', req.body.idea));
});

apiRouter.delete('/ideas/:ideaId', (req, res, next) => {
  deleteFromDatabasebyId('ideas', req.ideaId);
  res.status(204).send();
});


//Meetings
apiRouter.get('/meetings', (req, res, next) => {
  res.send(getAllFromDatabase('meetings'));
});

apiRouter.post('/meetings', (req, res, next) => {
  res.send(addToDatabase('meetings', createMeeting()));
});

apiRouter.delete('/meetings', (req, res, next) => {
  deleteAllFromDatabase('meetings');
  res.status(204).send();
});


//Work 
apiRouter.get('/minions/:minionId/work', (req, res, next) => {
  res.send(getAllFromDatabase('work'));
});

apiRouter.post('/minions/:minionId/work', (req, res, next) => {
  res.send(addToDatabase('work', req.body.idea));
});

apiRouter.put('/minions/:minionId/work/:workId', (req, res, next) => {
  res.send(updateInstanceInDatabase('work', req.body.idea));
});

apiRouter.delete('/minions/:minionId/work/:workId', (req, res, next) => {
  deleteFromDatabasebyId('work', req.id);
  res.status(204).send();
});


module.exports = apiRouter;
