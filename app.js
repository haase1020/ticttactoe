//HTML elements

const statusDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.game-cell');

// game variables
let gameIsLive = true;
let xIsNext = true;

// event handlers
const handleReset = (e) => {
  console.log(e);
};

const handleCellClick = (e) => {
  console.log(e.target.classList);
};

// event listeners
resetDiv.addEventListener('click', handleReset);

for (const cellDiv of cellDivs) {
  cellDiv.addEventListener('click', handleCellClick);
}
