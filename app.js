//HTML elements

const statusDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.game-cell');

// game variables
let gameIsLive = true;
let xIsNext = true;

//functions
const checkGameStatus = () => {
  // const topLeft = cellDivs[0].classList[1];
  const topMiddle = cellDivs[1].classList[1];
  const topRight = cellDivs[2].classList[1];
  const middleLeft = cellDivs[3].classList[1];
  const middleMiddle = cellDivs[4].classList[1];
  const middleRight = cellDivs[5].classList[1];
  const bottomLeft = cellDivs[6].classList[1];
  const bottomMiddle = cellDivs[7].classList[1];
  const bottomRight = cellDivs[8].classList[1];
};

//if there a winner?
// if (topLeft && topLeft === topMiddle && topLeft === topRight) {
//   console.log(topleft);
// }

// event handlers
const handleReset = (e) => {
  console.log(e);
};

const handleCellClick = (e) => {
  const classList = e.target.classList;
  const location = classList[1];

  if (classList[2] === 'x' || classList[2] === 'o') {
    return;
  }

  if (xIsNext) {
    classList.add('x');
    checkGameStatus();
    xIsNext = !xIsNext;
  } else {
    classList.add('o');
    checkGameStatus();
    xIsNext = !xIsNext;
  }
};

// event listeners
resetDiv.addEventListener('click', handleReset);

for (const cellDiv of cellDivs) {
  cellDiv.addEventListener('click', handleCellClick);
}
