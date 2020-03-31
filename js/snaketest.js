let box = 25;
let canvasSize = 23;

let points = 0;


// Variablendeklarierung Schlange
let snake = [];
//Anfangsposition Schlange
snake [0] = {
    x: Math.floor(canvasSize / 2 * box),
    y: Math.floor(canvasSize / 2 * box)
};
let dir;
document.addEventListener("keydown",function(event){
  if (event.keyCode === 37) {
      dir = "LEFT";
  } else if (event.keyCode === 38) {
      dir = "UP";
  } else if (event.keyCode === 39) {
      dir = "RIGHT";
  } else if (event.keyCode === 40) {
      dir = "DOWN";
  }
});



function draw(canvas,ctx,dir) {
    //Hintergrund malen
    ctx.fillStyle = "lightgreen";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //Schlangenkopf malen sowie weitere Glieder hinzufügen
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = "black";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }

    //Schlange bewegen
    if (dir === "LEFT")
        snake[0].x -= box;
    if (dir === "RIGHT")
        snake[0].x += box;
    if (dir === "UP")
        snake[0].y -= box;
    if (dir === "DOWN")
        snake[0].y += box;
    points += snakeOver(snake[0].x,snake[0].y,canvas,ctx,box);
    document.getElementById("info").innerText = "Points: "+points;
};
