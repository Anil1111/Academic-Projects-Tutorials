const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.send('<h1 id="page-title">Messaging App</h1>');
});

router.post('/', (req, res) => {
  console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$hit');
  const { author, message } = req.body;
  if (author === undefined) {
    res.status(400);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ message: 'Every message requires an author' }));
    return;
  }

  res.redirect('/');

});

module.exports = router;