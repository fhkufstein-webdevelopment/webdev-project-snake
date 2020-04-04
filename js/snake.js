//  variables for game status
let gameRunning = true;
let gameFinished = false;           // if gameFinished true -> send score to database
let userScore = 0;
let interValTimer = 50;                // timeinterval for the game
let bgm;                              // backgroundmusic



let canvas;                         // so the vairable can be seen from outside
let ctx;                            // so the variable can be seen from outside

document.addEventListener("DOMContentLoaded", function (event) {
    canvas = document.getElementById('field');
    if(canvas.getContext){ // Canvas wird nicht unterstützt
        ctx = canvas.getContext("2d");   // set canvas to be a 2d objekt
    }else{
        alert("Fehler! Canvas wird von diesem Browser nicht unterstützt! Bitte wechseln Sie zu einem anderem Browser");
    }

    document.getElementById("manual").addEventListener("click",function () {
        checkGameStatus();
        openManual();

    });
});

let gameRun = function game() {             // variable with function that calls the other function to draw backround and apples
    draw(canvas, ctx, dir);                //call of the background
    createNewCircle(canvas, ctx);           // call of the circles (apples)
};
let intervalGame = setInterval(gameRun,interValTimer);  // set interval to the variable gameRun with function

function checkGameStatus(endGame) {                                         // check for gameStastus // status is only used in collision
    if (endGame == true){                                                   // check if the status endGame is true and prozeed to make the finish screen
        gameFinished = true;                                                // set the gamefinished status to the endGame status
        saveScore(userScore,gameFinished);                                  // calls method to save score after game is finished
        showGameFinishedDialog();                                           // calls GameFinishedDialog to play again or logout
    }else if(gameRunning == true && gameFinished == false){                 // check if game is running and if game is not finished and then set the game to stop
        clearInterval(intervalGame);                                        // clear the interval of the game = stop the game
        document.getElementById("pause").style.color = "#192d00"; //makes Game Paused visible
        gameRunning = false;                                                // set the game to status stop
    }else if (gameRunning == false && gameFinished == false){               // check if the games i not running and game is not finished then set the game to running again
        intervalGame = setInterval(gameRun,interValTimer);                  // create a new interval for the game functions with timer which is set at the top
        document.getElementById("pause").style.color = "#9ac40a"; //makes Game Paused visible
        gameRunning = true;                                                 // set game to status running again
    }
}


function showGameFinishedDialog() {
    let c;
    c = confirm("Game Over!\nWollen sie nochmal spielen?\nMit Cancel loggen Sie sich aus");

    if (c === true){
        clearInterval(intervalGame);
    }else{
        gameLogout();
    }
}
