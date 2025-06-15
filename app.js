const divContainer = document.createElement('div');
divContainer.style.display = 'flex';
divContainer.style.flexWrap = 'wrap';
document.body.appendChild(divContainer);

for (let i = 0; i < 100; i++) {
  const divSquare = document.createElement('div');
  divSquare.style.width = '30px';
  divSquare.style.height = '30px';
  divSquare.style.border = '1px solid black';
  divSquare.addEventListener ('mouseover', () => {
    divSquare.style.backgroundColor = 'black';
  })
  divContainer.appendChild(divSquare);
}