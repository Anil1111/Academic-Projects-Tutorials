const express = require('express');
const issuesRouter = express.Router({ mergeParams: true });
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');


issuesRouter.param('issueId', (req, res, next, id) => {
  req.issueId = id;

  db.get("select * from Issue where id = $id",
    { $id: req.issueId },
    (err, row) => {
      if (err || !row) {
        err ? console.log(err) : '';
        res.status(404).send('No matching ID present');
      } else {
        req.issue = { issue: row };
        next();
      }
    }
  );
});

const validateIssues = (req, res, next) => {
  issue = req.body.issue;
  if (!issue.name || !issue.description || !issue.publication_date) {
    res.status(400).send('Not a valid issue');
  } else {
    req.newIssue = issue;
    next();
  }
};

//GET All Request
issuesRouter.get('/', (req, res, next) => {
  console.log('helloooo');
  db.all("select * from Issue where series_id = $id",
    { $id: req.seriesId },
    (err, rows) => {
      if (err) {
        console.log(err);
        res.status(404).send();
      } else {
        // console.log({ issues: rows });
        res.send({ issues: rows });
      }
    })
});

//GET ONE ID
issuesRouter.get('/:issueId', (req, res, next) => {
  res.send(req.issue);
});

//POST NEW Issue 
issuesRouter.post('/', validateIssues, (req, res, next) => {
  db.run(`insert into Issue( name, issue_number, publication_date)
      values ($name, $description, $publication_date, $artist_id, $series_id)`,
    {
      $name: req.newIssue.name, $description: req.newIssue.description, $publication_date: req.newIssue.publication_date, $artist_id: req.newIssue.artist_id, $series_id: req.newIssue.series_id
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


issuesRouter.put('/:issueId', validateIssues, (req, res, next) => {
  db.run(`update Issue set name = '${req.newIssue.name}', description = '${req.newIssue.description}'
        where id = ${req.issueId}`,
    err => {
      if (err) {
        console.log(err);
        res.status(400).send('Could not update!');
      } else {
        db.get("select * from Issue where id = $id",
          { $id: req.issueId },
          (err, row) => {
            if (err || !row) {
              console.log(err);
              res.status(404).send();
            } else {
              res.send({ issue: row });
            }
          }
        );
      }
    }
  );
});

issuesRouter.delete('/:issueId', (req, res, next) => {
  console.log(req.newIssue);
  db.run(`delete from Issue`,
    err => {
      if (err) {
        console.log(err);
        res.status(400).send('Could not Delete!');
      } else {
        db.get("select * from Issue where id = $id",
          { $id: req.issueId },
          (err, row) => {
            if (err || !row) {
              console.log(err);
              res.status(404).send();
            } else {
              res.send({ issue: row });
            }
          }
        );
      }
    }
  )
});


module.exports = issuesRouter;


