// Eventos del DOM

//Variables

// Funciones 

function pintar(ele1, color = 'green') {
    console.log(color);
    ele1.style.backgroundColor = color;
  }
  
  const ele = document.getElementById("ele1");
  ele.addEventListener("click", () => {
    pintar(ele, 'yellow');
  });

// Eventos


