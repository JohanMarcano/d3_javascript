// Cambiar color al hacer clic en los divs
const divs = document.querySelectorAll('div[id]');
divs.forEach(function(div) {
  div.addEventListener('click', () => {
    this.style.backgroundColor = 'black';
  });
});

// Cambiar color del div "key" al presionar teclas a, s o d
document.addEventListener('keydown', function(event) {
  const keyDiv = document.getElementById('key');
  if (event.key === 'a' || event.key === "A") {
    keyDiv.style.backgroundColor = 'pink';
  } else if (event.key === 's' || event.key === "S") {
    keyDiv.style.backgroundColor = 'orange';
  } else if (event.key === 'd' || event.key === "D") {
    keyDiv.style.backgroundColor = 'lightblue';
  }
});

// Crear nuevo div al presionar teclas q, w o e
document.addEventListener('keydown', function(event) {
  const newDiv = document.createElement('div');
  newDiv.style.width = '200px';
  newDiv.style.height = '200px';
  newDiv.style.border = '1px solid gray';

  if (event.key === 'q' || event.key === "Q") {
    newDiv.style.backgroundColor = 'purple';
  } else if (event.key === 'w' || event.key === "W") {
    newDiv.style.backgroundColor = 'gray';
  } else if (event.key === 'e' || event.key === "E") {
    newDiv.style.backgroundColor = 'brown';
  }

  document.body.appendChild(newDiv);
});

