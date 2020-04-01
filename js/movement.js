let box = 25;
let canvasSize = 23;


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
    }else if (event.keyCode === 80){
        checkGameStatus();
    }
});

function createRandomColor(){
    var letter = '0123456789ABCDEF';        // range of elemnts to use
    var color = '#';                        // starting point to set it as hexcolor
    for(var i = 0; i < 6; i++){             // itterate from 0 to 5 that 6 differenc nubmer where selected
        color += letter[Math.floor(Math.random()*16)];  //get a random elemente (0 to 15) from letter and add it to color
    }
    return color;
}

function draw(canvas, ctx) {
    //Hintergrund malen
    ctx.fillStyle = "#9ac40a";
    // optional for bonus stage
    //ctx.fillStyle = createRandomColor();
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //Schlangenkopf malen sowie weitere Glieder hinzufügen
    for (let i = 0; i < snake.length; i++) {
        snake[i].x = exitWidth(snake[i].x,canvas);      //check if x position over the max with of the canvas // or is under it
        snake[i].y = exitHeight(snake[i].y,canvas);     // check if y position over the max height of the canvas  // or is under it
        ctx.fillStyle = "#000000";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        checkInnerCollision(snake[0].x,snake[0].y,snake[i].x,snake[i].y,i,box); //check head touches the tail
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
    //newHead wird zur Schlange hinzugefügt
    snake.unshift(newHead);
    darwUserScore(snakeOver(snake[0].x, snake[0].y, canvas, ctx, box),snake.length);
};

