document.addEventListener("DOMContentLoaded", function() {
    let canv = document.getElementById("field");  // select canvas
    let ctx = canv.getContext("2d");   // set canvas to be a 2d objekt

    /* -----------------------------------------------actual mechanic------------------------------------------------------------------ */
    let arcWH = 10;              // for the circle size
    let arcRad = 2 * Math.PI;    // for the radius
    let appleColor = "#7CFC00";  // color of the apple

    let appleX;                  // x position of the apple
    let appleY;                  // y position of the apple

    let applePoints = 10;        // amount of points to get if collected
    let applewidth = 25;         // width of the apple
    let appleheight = 25;        // height of the apple
    createNewCircle();           // used to create the first apple
    /* ----------------------------------------------------------------------------------------------------------------- */


    /* ----------------------------------------------Only Testing------------------------------------------------------------------- */
    // only for testing
    let pointsAmount = 0;
    // let snakeColor = "#FF0000";


    // only for testing
    document.getElementById("input").addEventListener("click", function(){

        let snakeX = document.getElementById("xInput").value;
        let snakeY = document.getElementById("yInput").value;

        ctx.fillStyle = "#FF0000";
        ctx.fillRect(snakeX,snakeY,25,25);

        pointsAmount = pointsAmount + snakeOver(snakeX,snakeY);
        document.getElementById("info").innerText = "Points: " + pointsAmount;
    });
    // only for testing
    document.getElementById("loeschen").addEventListener("click", function(){
        ctx.fillStyle = "#fff";
        ctx.fillRect(snakeX,snakeY,25,25);
        document.getElementById("xInput").value = "";
        document.getElementById("yInput").value = "";
    });
    /* ----------------------------------------------------------------------------------------------------------------- */

    /* -----------------------------------------------actual mechanic------------------------------------------------------------------ */
    // create new circle
    function createNewCircle(){
        appleX = Math.floor(Math.random()* (canv.width-(applewidth*2))+applewidth);  //create random x position with the max width of the canvas -1 // -*2 + applewith is that it cant go over the maxamount
        appleY = Math.floor(Math.random()* (canv.height-(appleheight*2))+applewidth); // create random y position with the max height of the canvas -1 // -*2 + applewith is that it cant go over the maxamount
        ctx.beginPath();                                    // used to create a circle // say it should shart here
        ctx.arc(appleX, appleY, arcWH, 0, arcRad,false);    // create an ark (circle) ,x and y position, radius, starting angle, end angle , and if it should go counter clockwise
        ctx.fillStyle = appleColor;                         // set the color of the apple
        ctx.fill();                                         // fill the apple with the set color
        ctx.stroke();                                       // to actually draw the acr to the canvas
        console.log(appleX + " " + appleY);
    }

    function snakeOver(snakeX,snakeY){
        if(snakeX < (appleX+applewidth) && snakeX > (appleX-applewidth) && snakeY < (appleY+appleheight) && snakeY > (appleY-applewidth)){
            // collision detection if the snake is in the range of the circle from the middle of the circle up the appleheight and applewidth to get the whole apple
            /* ----------------------------------------------Only Testing------------------------------------------------------------------- */
            ctx.clearRect(0, 0, canv.width, canv.height);
            /* ----------------------------------------------------------------------------------------------------------------- */
            createNewCircle();  // if it is ture draw anohter circle
            return applePoints; // return the amount fo points you gain
        }
    }
    /* ----------------------------------------------------------------------------------------------------------------- */
});
