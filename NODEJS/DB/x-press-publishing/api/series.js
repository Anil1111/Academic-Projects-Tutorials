const express = require('express');
const seriesRouter = express.Router();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');

seriesRouter.param('seriesId', (req, res, next, id) => {
  req.seriesId = id;

  db.get("select * from Series where id = $id",
    { $id: req.seriesId },
    (err, row) => {
      if (err || !row) {
        err ? console.log(err) : '';
        res.status(404).send('No matching ID present');
      } else {
        req.series = { series: row };
        next();
      }
    }
  );
});

const validateSeries = (req, res, next) => {
  series = req.body.series;
  if (!series.name || !series.description) {
    res.status(400).send('Not a valid series');
  } else {
    req.newSeries = series;
    next();
  }
};

//GET All Request
seriesRouter.get('/', (req, res, next) => {
  db.all("select * from Series", (err, rows) => {
    if (err) {
      console.log(err);
      res.status(404).send();
    } else {
      res.send({ series: rows });
    }
  })
});

//GET ONE ID
seriesRouter.get('/:seriesId', (req, res, next) => {
  res.send(req.series);
});

//POST NEW SERIES 
seriesRouter.post('/', validateSeries, (req, res, next) => {
  db.run(`insert into Series( name, description)
      values ($name, $description)`,
    {
      $name: req.newSeries.name, $description: req.newSeries.description
    },
    function (err) {
      if (err) {
        console.log(err);
        res.status(400).send('Not created');
      } else {
        db.get("select * from Series where id = $id",
          { $id: this.lastID },
          (err, row) => {
            if (err || !row) {
              console.log(err);
              res.status(404).send();
            } else {
              res.status(201).send({ series: row });
            }
          }
        )
      }

    }
  )
});


seriesRouter.put('/:seriesId', validateSeries, (req, res, next) => {
  // console.log(req.newArtist);
  db.run(`update Series set name = '${req.newSeries.name}', description = '${req.newSeries.description}'
        where id = ${req.seriesId}`,
    err => {
      if (err) {
        console.log(err);
        res.status(400).send('Could not update!');
      } else {
        db.get("select * from Series where id = $id",
          { $id: req.seriesId },
          (err, row) => {
            if (err || !row) {
              console.log(err);
              res.status(404).send();
            } else {
              res.send({ series: row });
            }
          }
        );
      }
    }
  );
});

seriesRouter.delete('/:seriesId', (req, res, next) => {
  // console.log(req.newArtist);
  db.run(`delete from Series`,
    err => {
      if (err) {
        console.log(err);
        res.status(400).send('Could not Delete!');
      } else {
        db.get("select * from Series where id = $id",
          { $id: req.seriesId },
          (err, row) => {
            if (err || !row) {
              console.log(err);
              res.status(404).send();
            } else {
              res.send({ series: row });
            }
          }
        );
      }
    }
  )
});

// const issuesRouter = require('./issues');
// seriesRouter.use('/:seriesId/issues', issuesRouter);

seriesRouter.get('/:seriesId/issues', (req, res, next) => {
  db.all("select * from Issue where series_id = $id",
    { $id: req.seriesId },
    (err, rows) => {
      if (err) {
        console.log(err);
        res.status(404).send();
      } else {
        console.log({ issues: rows });
        res.send({ issues: rows });
      }
    })
});

const validateIssues = (req, res, next) => {
  issue = req.body.issue;
  if (!issue.name || !issue.issueNumber || !issue.publicationDate || !issue.artistId) {
    res.status(400).send('Not a valid issue');
  } else {
    req.newIssue = issue;
    next();
  }
};

//POST NEW Issue 
seriesRouter.post('/:seriesId/issues', validateIssues, (req, res, next) => {
  // console.log(req.newIssue);
  db.run(`insert into Issue( name, issue_number, publication_date, artist_id, series_id)
      values ($name, $description, $publication_date, $artist_id, $series_id)`,
    {
      $name: req.newIssue.name, $issue_number: req.newIssue.issueNumber, $publication_date: req.newIssue.publicationDate, $artist_id: req.newIssue.artistId, $series_id: req.seriesId
    },
    function (err) {
      if (err) {
        console.log(err);
        res.status(400).send('Not created');
      } else {
        db.get("select * from Issue where id = $id",
          { $id: this.lastID },
          (err, row) => {
            if (err || !row) {
              console.log(err);
              res.status(404).send();
            } else {
              res.status(201).send({ issue: row });
            }
          }
        )
      }

    }
  )
});

module.exports = seriesRouter;


