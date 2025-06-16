const inputButton = document.createElement('button');
inputButton.textContent = 'Click Me!';
Object.assign(inputButton.style, {
  backgroundColor: 'black',
  color: 'white',
  width: '150px',
  height: '50px',
  margin: '20px auto',
  display: 'block',
  cursor: 'pointer',
  fontSize: '16px'
});
document.body.appendChild(inputButton);

const divContainer = document.createElement('div');
Object.assign(divContainer.style, {
  display: 'flex',
  flexWrap: 'wrap',
  width: '400px',
  height: '400px',
  margin: '0 auto',
  border: '5px solid #38000A',
  backgroundColor: '#FFA896',
});
document.body.appendChild(divContainer);

function createGrid(squaresPerSide) {
  divContainer.innerHTML = ''; // Clear existing grid
  const squareSize = 400 / squaresPerSide;

  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const divSquare = document.createElement('div');
    Object.assign(divSquare.style, {
      width: `${squareSize}px`,
      height: `${squareSize}px`,
      border: '1px solid black',
      boxSizing: 'border-box',
    });
    divSquare.addEventListener ('mouseover', () => {
      divSquare.style.backgroundColor = 'black';
    });
    divContainer.appendChild(divSquare);
  }
}

createGrid(10);

inputButton.addEventListener ('click', () => {
  let input = prompt("Between 1- 100");
  let gridSize = parseInt(input);

  if (!isNaN(gridSize) && gridSize > 0 && gridSize <= 100) {
    createGrid(gridSize);
  }

  else {
    alert('Please insert number between 1 to 100');
  }
});