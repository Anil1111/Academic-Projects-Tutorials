const express = require('express');
const meetingsRouter = express.Router();
const { getAllFromDatabase, addToDatabase, deleteAllFromDatabase, createMeeting } = require('./db');

//Meetings
meetingsRouter.get('/', (req, res, next) => {
  res.send(getAllFromDatabase('meetings'));
});

meetingsRouter.post('/', (req, res, next) => {
  res.status(201).send(addToDatabase('meetings', createMeeting()));
});

meetingsRouter.delete('/', (req, res, next) => {
  deleteAllFromDatabase('meetings');
  res.status(204).send();
});

module.exports = meetingsRouter;