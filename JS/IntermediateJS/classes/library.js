class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  set isCheckedOut (bool) {
    this._isCheckedOut = bool;
  }
  getAverageRating() {
    const avgRating = this._ratings.reduce((accrating, currrating) => {
      return accrating = accrating + currrating;   
    }, 0);
    return (avgRating/this._ratings.length);
  }
  toggleCheckOutStatus() {
    this._isCheckedOut= !this._isCheckedOut;
  }
  addRating(rating) {
    this._ratings.push(rating);
  }
}

class Book extends Media{
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }

}


class Movie extends Media{
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}


class CD extends Media{
  constructor(artist, title, isCheckedOut , ratings , songs) {
    super(title),
    this._artist = artist;
    this._songs = songs;
  }
  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }

}

const media1 = new Media('Tit1');
media1.isCheckedOut = true;
console.log(media1.isCheckedOut);
media1.addRating(2);
media1.addRating(4);
console.log(media1.ratings);
console.log(media1.getAverageRating());

const book1 = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
console.log(book1.isCheckedOut);
book1.addRating(4);
book1.addRating(5);
book1.addRating(5);
console.log(book1.getAverageRating());

const movie1 = new Movie('Jan de Bont', 'Speed',116);
movie1.toggleCheckOutStatus();
console.log(movie1.isCheckedOut);
movie1.addRating(1);
movie1.addRating(1);
movie1.addRating(5);
console.log(movie1.getAverageRating());