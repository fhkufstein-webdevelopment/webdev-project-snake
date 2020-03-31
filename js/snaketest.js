let box = 25;
let canvasSize = 23;

let points = 0;





let game = setInterval(draw, 100);

// Variablendeklarierung Schlange
let snake = [];
//Anfangsposition Schlange
snake [0] = {
    x: Math.floor(canvasSize / 2 * box),
    y: Math.floor(canvasSize / 2 * box)
};
let dir;
document.addEventListener("keydown", function (event) {
    if (event.keyCode === 37 && dir !== "RIGHT") {
        dir = "LEFT";
    } else if (event.keyCode === 38 && dir !== "DOWN") {
        dir = "UP";
    } else if (event.keyCode === 39 && dir !== "LEFT") {
        dir = "RIGHT";
    } else if (event.keyCode === 40 && dir !== "UP") {
        dir = "DOWN";
    }
});


function draw(canvas, ctx, dir) {
    //Hintergrund malen
    ctx.fillStyle = "lightgreen";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //Schlangenkopf malen sowie weitere Glieder hinzufügen
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = "black";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //Schlange bewegen
    if (dir === "LEFT")
        snakeX -= box;
    if (dir === "RIGHT")
        snakeX += box;
    if (dir === "UP")
        snakeY -= box;
    if (dir === "DOWN")
        snakeY += box;

    let newHead = {
        x: snakeX,
        y: snakeY
    };


    points += snakeOver(snake[0].x, snake[0].y, canvas, ctx, box);
    document.getElementById("info").innerText = "Points: " + points;

    if (snakeX < box || snakeY < box || snakeX > (canvasSize - 1) * box || snakeY > (canvasSize - 1) * box
        || collsion(newHead, snake))
    {
        clearInterval(game);
    }
    //newHead wird zur Schlange hinzugefügt
    snake.unshift(newHead);
}

