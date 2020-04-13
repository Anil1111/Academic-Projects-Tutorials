const doorImage1 = document.getElementById('door1');
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');
const startButton = document.getElementById('start');

const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
const closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
let numClosedDoors  = 3;
let currentlyPlaying  = true;

doorImage1.onclick = () => {
  // doorImage1.src = botDoorPath;
  randomChoreDoorGenerator(doorImage1);
};
doorImage2.onclick = () => {
  randomChoreDoorGenerator(doorImage2);
};
doorImage3.onclick = () => {
  randomChoreDoorGenerator(doorImage3);
};
startButton.onclick = () => {
  if (!currentlyPlaying) {
    startRound();
  };
};

const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = '';
  currentlyPlaying = true;
};

const randomChoreDoorGenerator = (element) => {
  if (isClicked(element)) {return;};
  const randomArr = [];
  const imageArr = [botDoorPath, beachDoorPath, spaceDoorPath];

  for (let i = numClosedDoors-1; i >= 0; i--) {
    // console.log(imageArr);
    const randomIndex = Math.floor(Math.random() * (i+1));
    // console.log(i + ' ' + randomIndex);
    randomArr.push(imageArr[randomIndex]);
    imageArr.splice(randomIndex, 1);
    // console.log(randomArr);
  };

  const randomIndex = Math.floor(Math.random() * numClosedDoors);
  element.src = randomArr[randomIndex];
  console.log(randomArr);
  playDoor(element);
};

const isClicked = (door) => {
  if (door.src === closedDoorPath && currentlyPlaying) {
    return false;
  } else {
    return true;
  };
};

const isBot = (door) => {
  if (door.src === botDoorPath) {
    return true;
  }else {
    return false;
  };
};

const playDoor = (door) => {
  numClosedDoors--;
  console.log(`The value of randomIndexrandomIndex ${numClosedDoors}`);
  if (isBot(door)) {
    gameOver();
  } else if (numClosedDoors === 0) {
    gameOver('win');
  };
};

const gameOver = (status) => {
  console.log(status);
  status === 'win' ? startButton.innerHTML ="You win! Play again?" : startButton.innerHTML = 'Game Over! Play again?';
  currentlyPlaying = false;
};



