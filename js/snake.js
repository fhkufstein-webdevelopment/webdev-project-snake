//  variables for game status
let gameRunning = false;
let gameFinished = false; // if gameFinished true -> send score to database
let userScore = 0;

// base function where all other function are called
document.addEventListener("DOMContentLoaded", function (event) {

    //  variables for game status
    let gameRunning = false;
    let gameFinished = false;
    let interValTimer = 50;                // timeinterval for the game

    let canvas = document.getElementById('field');

    if (canvas.getContext) {              // check if supports drawing
        let ctx = canvas.getContext("2d");   // set canvas to be a 2d objekt
        // optional
        //ctx.canvas.width = window.innerHeight; // sets the canvas to the interior width of the window pixel
        //ctx.canvas.height = window.innerHeight; // sets the canvas to the interio height of the window pixel

        function setGameStatus(){
            if(gameRunning == true){
                gameRunning = false;
                clear
            }
        }

        setInterval(function game() {
            draw(canvas, ctx, dir);                //call of the background
            createNewCircle(canvas, ctx);           // call of the circles (apples)
        }, interValTimer);

    } else {
        // Canvas wird nicht unterstützt
        alert("Fehler! Canvas wird von diesem Browser nicht unterstützt! Bitte wechseln Sie zu einem anderem Browser");
    }
});
