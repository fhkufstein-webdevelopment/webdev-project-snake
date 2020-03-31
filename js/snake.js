// base function where all other function are called
document.addEventListener("DOMContentLoaded", function(event) {

   //  variables for game status
   var gameRunning = false;
   var gameFinished = false; // if gameFinished true -> send score to database

   let canvas = document.getElementById('field');

   let interValTimer = 600;                // timeinterval for the game
   if (canvas.getContext) {              // check if supports drawing
   let ctx = canvas.getContext("2d");   // set canvas to be a 2d objekt
    // optional
    //ctx.canvas.width = window.innerHeight; // sets the canvas to the interior width of the window pixel
    //ctx.canvas.height = window.innerHeight; // sets the canvas to the interio height of the window pixel


   setInterval(function game(){

    draw(canvas,ctx,dir);                //call of the background
    createNewCircle(canvas,ctx);
    //createNewCircle(canvas,ctx);     // call of the circles (apples)
  },100);

 } else {
     // Canvas wird nicht unterstützt
     alert("Fehler! Canvas wird von diesem Browser nicht unterstützt! Bitte wechseln Sie zu einem anderem Browser");
 }
});
