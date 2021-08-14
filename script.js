/* eslint-disable no-alert */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
const container = document.getElementById('grid');
const resetButton = document.getElementById('reset');

function buildGrid(size) {
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      const cell = document.createElement('div');
      cell.classList.add('gridCell');

      container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
      container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

      container.appendChild(cell);
    }
  }
  // eslint-disable-next-line no-use-before-define
  drawOnGrid();
}
buildGrid(16);

function getRandomColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return randomColor;
}

function drawOnGrid() {
  const cells = document.querySelectorAll('.gridCell');

  cells.forEach(((cell) => {
    cell.addEventListener('mouseover', () => {
      // eslint-disable-next-line no-param-reassign
      cell.style.backgroundColor = getRandomColor();
    });
  }));
}

function drawNewGrid() {
  const newSize = prompt('How big of a canvas do you want?', '16');

  if (Number.isNaN(newSize)) {
    alert(' A real, positive number is required.');
    drawNewGrid();
  }

  if (newSize > 100) {
    alert(' Try and keep it at 100 maximum. ');
    drawNewGrid();
  } else {
    return buildGrid(newSize);
  }
}

resetButton.onclick = () => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  drawNewGrid();
};
