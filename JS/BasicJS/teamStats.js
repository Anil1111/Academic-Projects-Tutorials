const team = {
  _players: [{
    firstName: 'Pablo',
    lastName: 'Escobar',
    age: 22
  },
  {
    firstName: 'Ronaldo',
    lastName: 'James',
    age: 26
  },
  {
    firstName: 'Martin',
    lastName: 'Luther',
    age: 18
  }
  ],
  _games: [{
    opponent: 'Broncos',
    teaamPoints: 42,
    opponentPoints: 27
  },
  {
    opponent: 'Chocos',
    teaamPoints: 12,
    opponentPoints: 27
  },
  {
    opponent: 'Lactose',
    teaamPoints: 55,
    opponentPoints: 16
  }
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  set players(newPlayer) {
    this._players.push(newPlayer);
  },
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this._players.push(player);
  },
  addGame(opponent, teaamPoints, opponentPoints) {
    const game = {
      opponent,
      teaamPoints,
      opponentPoints
    };
    this._games.push(game);
  },
};


team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa ', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 74);
console.log(team.players);

team.addGame('Mocose', 33, 28);
team.addGame('Sarcose ', 44, 44);
team.addGame('Tonos', 12, 74);
console.log(team.games);



//Richard Testing - Uncomment below lines to execute and check

// //Creating Factory Function
// const newPlayer = (firstName, lastName, age) => {
//   return {
//     firstName,
//     lastName,
//     age
//   };
// };
// // Using the factory function
// const player1 = newPlayer('Mohandas', 'KaramChand', 91);
// //Setting the new player into teams
// team.players = player1;
// //Reading from the team object using Objects
// const checkTeamPlayersFromObject = Object.entries(team.players);
// console.log(checkTeamPlayersFromObject);
// //Reading from the team object using for loop
// let i =0;
// for (let player in team.players) {
//   console.log(team.players[i]);
//   i++;
// };