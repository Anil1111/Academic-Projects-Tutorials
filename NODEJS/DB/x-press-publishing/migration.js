const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database.sqlite');

db.serialize(() => {
  db.run("drop table if exists Artist", err => err ? console.log(err) : '');
  db.run(`create table if not exists Artist (
      id integer primary key,
      name text not null,
      date_of_birth not null,
      biography not null,
      is_currently_employed default 1
    )`, err => err ? console.log(err) : ''
  );


})