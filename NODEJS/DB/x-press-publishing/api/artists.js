const express = require('express');
const artistRouter = express.Router();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');

artistRouter.param('artistId', (req, res, next, id) => {
  req.artistId = id;

  db.get("select * from Artist where id = $id",
    { $id: req.artistId },
    (err, row) => {
      if (err || !row) {
        console.log(err);
        res.status(404).send('No matching ID present');
      } else {
        req.artist = { artist: row };
        next();
      }
    }
  );
});

const validateArtist = (req, res, next) => {
  artist = req.body.artist;
  if (!artist.name || !artist.dateOfBirth || !artist.biography) {
    res.status(400).send('Not a valid Artist I');
  } else {
    if (!artist.isCurrentlyEmployed) {
      artist.isCurrentlyEmployed = 1;
    }
    req.newArtist = artist;
    // console.log(req.newArtist);
    next();
  }
};

//GET All Request
artistRouter.get('/', (req, res, next) => {
  db.all("select * from Artist where is_currently_employed = 1", (err, rows) => {
    if (err) {
      console.log(err);
      res.status(404).send();
    } else {
      res.send({ artists: rows });
    }
  })
});

//GET ONE ID
artistRouter.get('/:artistId', (req, res, next) => {
  res.send(req.artist);
});

//POST NEW ARTIST
artistRouter.post('/', validateArtist, (req, res, next) => {
  // console.log(req.newArtist);
  db.run(`insert into Artist( name, date_of_birth, biography, is_currently_employed)
      values ($name, $date_of_birth, 
        $biography, $is_currently_employed)`,
    {
      $name: req.newArtist.name, $date_of_birth: req.newArtist.dateOfBirth,
      $biography: req.newArtist.biography, $is_currently_employed: req.newArtist.isCurrentlyEmployed
    },
    function (err) {
      if (err) {
        console.log(err);
        res.status(400).send('Not created');
      } else {
        db.get("select * from Artist where id = $id",
          { $id: this.lastID },
          (err, row) => {
            if (err || !row) {
              console.log(err);
              res.status(404).send();
            } else {
              res.status(201).send({ artist: row });
            }
          }
        )
      }

    }
  )
});


artistRouter.put('/:artistId', validateArtist, (req, res, next) => {
  // console.log(req.newArtist);
  db.run(`update Artist set name = '${req.newArtist.name}', date_of_birth = '${req.newArtist.dateOfBirth}', 
        biography = '${req.newArtist.biography}', is_currently_employed = ${req.newArtist.isCurrentlyEmployed}
        where id = ${req.artistId}`,
    err => {
      if (err) {
        console.log(err);
        res.status(400).send('Could not update!');
      } else {
        db.get("select * from Artist where id = $id",
          { $id: req.artistId },
          (err, row) => {
            if (err || !row) {
              console.log(err);
              res.status(404).send();
            } else {
              res.send({ artist: row });
            }
          }
        );
      }
    }
  );
});

artistRouter.delete('/:artistId', (req, res, next) => {
  // console.log(req.newArtist);
  db.run(`update Artist set is_currently_employed = 0`,
    err => {
      if (err) {
        console.log(err);
        res.status(400).send('Could not Delete!');
      } else {
        db.get("select * from Artist where id = $id",
          { $id: req.artistId },
          (err, row) => {
            if (err || !row) {
              console.log(err);
              res.status(404).send();
            } else {
              res.send({ artist: row });
            }
          }
        );
      }
    }
  )
});


module.exports = artistRouter;