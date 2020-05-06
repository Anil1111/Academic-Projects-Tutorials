const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database.sqlite');

db.serialize(() => {
  db.run("drop table if exists Artist", err => err ? console.log(err) : '');
  db.run(`create table if not exists Artist (
      id integer primary key,
      name text not null,
      date_of_birth not null,
      biography not null,
      is_currently_employed integer default 1
    )`, err => err ? console.log(err) : ''
  );

  db.run("INSERT INTO Artist (name, date_of_birth, biography) VALUES ('Stan Lee', 'December 28, 1922', 'I definitely work here')", err => err ? console.log(err) : '');

  db.run("INSERT INTO Artist (name, date_of_birth, biography) VALUES ('Jack Kirby', 'August 28, 1917', 'I also definitely work here')", err => err ? console.log(err) : '');

  // Series Table
  db.run("drop table if exists Series", err => err ? console.log(err) : '');
  db.run(`create table if not exists Series (
      id integer primary key,
      name text not null,
      description not null
    )`, err => err ? console.log(err) : ''
  );

  db.run("INSERT INTO Series (name, description) VALUES ('Series Name 1', 'Series Description 1')", err => err ? console.log(err) : '');

  db.run("INSERT INTO Series (name, description) VALUES ('Series Name 2', 'Series Description 2')", err => err ? console.log(err) : '');


  // Issues Table
  db.run("drop table if exists Issue", err => err ? console.log(err) : '');
  db.run(`create table if not exists Issue (
        id integer primary key,
        name text not null,
        issue_number integer not null,
        publication_date text not null,
        artist_id integer not null,
        series_id integer not null,
        foreign key(artist_id) references Artist(id),
        foreign key(series_id) references Series(id)
      )`, err => err ? console.log(err) : ''
  );

  db.run("INSERT INTO Issue (id, name, issue_number, publication_date, artist_id, series_id) VALUES (1, 'Series 2', 1, 'January 1, 1990', 1, 2)", err => err ? console.log(err) : '');

  db.run("INSERT INTO Issue (id, name, issue_number, publication_date, artist_id, series_id) VALUES (2, 'Series 2', 2, 'January 2, 1990', 1, 2)", err => err ? console.log(err) : '');

  db.run("INSERT INTO Issue (id, name, issue_number, publication_date, artist_id, series_id) VALUES (3, 'Series 3', 1, 'January 3, 1990', 1, 3)", err => err ? console.log(err) : '');

  db.run("INSERT INTO Issue (name, issue_number, publication_date, artist_id, series_id) VALUES ('New Issue', 3, 'January 3, 1990', 1, 3)", err => err ? console.log(err) : '');
})