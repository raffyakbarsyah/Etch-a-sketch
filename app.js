document.body.style.backgroundColor = '#9B1313';

let currentColorMode = 'black';

const mainContainer = document.createElement('div');
Object.assign(mainContainer.style, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '40px',
  padding: '50px',
});
document.body.appendChild(mainContainer);

const colorContainer = document.createElement('div');
Object.assign(colorContainer.style, {
  display: 'flex',
  gap: '0px',
  justifyContent: 'center',
  flexDirection: 'column',
})
document.body.appendChild(colorContainer);

const blackMode = document.createElement('button');
blackMode.textContent = 'Black Mode';
Object.assign(blackMode.style, {
  backgroundColor: 'black',
  color: 'white',
  width: '150px',
  height: '50px',
  borderRadius: '12px',
  margin: '10px auto',
  display: 'block',
  cursor: 'pointer',
  fontSize: '16px'
})
colorContainer.appendChild(blackMode);

const randomMode = document.createElement('button');
randomMode.textContent = 'Random Mode';
Object.assign(randomMode.style, {
  backgroundColor: 'black',
  color: 'white',
  width: '150px',
  height: '50px',
  borderRadius: '12px',
  margin: '10px auto',
  display: 'block',
  cursor: 'pointer',
  fontSize: '16px'
})
colorContainer.appendChild(randomMode);

blackMode.addEventListener('click', () => {
  currentColorMode = 'black';
  createGrid(50);
});
randomMode.addEventListener('click', () => {
  currentColorMode = 'random';
  createGrid(50);
});

const inputButton = document.createElement('button');
inputButton.textContent = 'Change Grid Size';
Object.assign(inputButton.style, {
  backgroundColor: 'black',
  color: 'white',
  width: '150px',
  height: '50px',
  borderRadius: '12px',
  margin: '20px auto',
  display: 'block',
  cursor: 'pointer',
  fontSize: '16px'
});
mainContainer.appendChild(inputButton);

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
mainContainer.appendChild(divContainer);

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
      if (currentColorMode === 'black') {
        divSquare.style.backgroundColor = 'black';
      }

      else {
        divSquare.style.backgroundColor = getRandomColor();
      }
    });
    divContainer.appendChild(divSquare);
  }
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

createGrid(50);

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

const resetButton = document.createElement('button');
resetButton.textContent = 'Reset Grid';
Object.assign(resetButton.style, {
  backgroundColor: 'black',
  color: 'white',
  width: '150px',
  height: '50px',
  borderRadius: '12px',
  margin: '20px auto',
  display: 'block',
  cursor: 'pointer',
  fontSize: '16px'
});
mainContainer.appendChild(resetButton);

resetButton.addEventListener ('click', () => {
  createGrid(50);
});