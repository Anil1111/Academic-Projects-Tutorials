const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const errorhandler = require('errorhandler');
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './db.sqlite');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.use(cors());
app.use(errorhandler());
app.use(morgan('dev'));
app.use(bodyParser.json());


app.get('/strips', (req, res, next) => {
  db.all("select * from Strip", (err, rows) => {
    if (err) {
      res.status(500).send();
    } else {
      res.send({ strips: rows });
    }
  });
});

const validateStrip = (req, res, next) => {
  const strip = req.body.strip;
  if (strip.head && strip.body && strip.background && strip.bubbleType) {
    next();
  } else {
    res.status(400).send();
  }
}

app.post('/strips', validateStrip, (req, res, next) => {
  db.run(`INSERT INTO Strip (head, body, background, bubble_type, bubble_text, caption)
          VALUES ($head, $body, $background, $bubble_type, $bubble_text, $caption)`,
    {
      $head: req.body.strip.head,
      $body: req.body.strip.body,
      $background: req.body.strip.background,
      $bubble_type: req.body.strip.bubbleType,
      $bubble_text: req.body.strip.bubbleText,
      $caption: req.body.strip.caption
    },
    function (err) {
      if (err) {
        console.log(err);
        res.status(500).send();
      } else {
        db.get("select * from Strip where id = $id",
          { $id: this.lastID },
          (err, row) => {
            if (err) {
              console.log(err);
              res.status(500).send();
            } else {
              res.status(201).send({ strip: row });
            }
          })
      }
    }
  );

});

app.use((err, req, res, next) => {
  errorCode = err.status || 500;
  res.status(errorCode).send(err.message);
});

app.listen(PORT, () => {
  console.log('Server is listening on 4001..');
});

module.exports = app;