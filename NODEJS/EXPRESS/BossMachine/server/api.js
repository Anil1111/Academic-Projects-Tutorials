const express = require('express');
const apiRouter = express.Router();
const ideasRouter = require('./ideasRouter');
const meetingsRouter = require('./meetingsRouter');
const minionsRouter = require('./minionsRouter');

apiRouter.use('/minions', minionsRouter);
apiRouter.use('/ideas', ideasRouter);
apiRouter.use('/meetings', meetingsRouter);


module.exports = apiRouter;
