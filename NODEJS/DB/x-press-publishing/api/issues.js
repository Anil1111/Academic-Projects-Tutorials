const express = require('express');
const issuesRouter = express.Router({ mergeParams: true });
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');

issuesRouter.get('/', (req, res, next) => {
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
issuesRouter.post('/', validateIssues, (req, res, next) => {
  // console.log(req.newIssue);
  db.run(`insert into Issue( name, issue_number, publication_date, artist_id, series_id)
      values ($name, $issue_number, $publication_date, $artist_id, $series_id)`,
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

issuesRouter.put('/:issueId', validateIssues, (req, res, next) => {
  db.run(`update Issue set name = '${req.newIssue.name}', issue_number = '${req.newIssue.issueNumber}', publication_date = '${req.newIssue.publicationDate}', artist_id = '${req.newIssue.artistId}' where id = ${req.issueId} and series_id = ${req.seriesId}`,
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
  db.run(`delete from Issue where id = ${req.issueId} and series_id = ${req.seriesId}`,
    err => {
      if (err) {
        console.log(err);
        res.status(400).send('Could not Delete!');
      } else {
        res.status(204).send();

      }
    }
  )
});



module.exports = issuesRouter;


