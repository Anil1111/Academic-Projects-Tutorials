const express = require('express');
const apiRouter = express.Router();
const artistRouter = express('artists');

apiRouter.use('/artists', artistRouter);

module.exports = apiRouter;