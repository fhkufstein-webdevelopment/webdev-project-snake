/* -----------------------------------------------actual mechanic------------------------------------------------------------------ */
let arcWH = 10;              // for the circle size
let arcRad = 2 * Math.PI;    // for the radius
let appleColor = "blue";  // color of the apple

let appleX;                  // x position of the apple
let appleY;                  // y positon of the apple

let applePoints = 10;        // amount of points to get if collected
let applewidth = 25;         // width of the apple
let appleheight = 25;        // height of the apple
let newapple = true;

// create new circle
function createNewCircle(canv, ctx,snake) {
    if (newapple == true) {
        appleX = Math.floor(Math.random() * (canv.width - (applewidth * 2)) + applewidth*2);  //create random x position with the max width of the canvas -1 // -*2 + applewith is that it cant go over the maxamount
        appleY = Math.floor(Math.random() * (canv.height - (appleheight * 2)) + applewidth*2); // create random y position with the max height of the canvas -1 // -*2 + applewith is that it cant go over the maxamount
        appleX -= (appleX%applewidth)+(applewidth)/2;
        appleY -= (appleY%appleheight)+(appleheight)/2;
        if (checkIfAppleDrawnOverSnake(canv, ctx,snake) == true){

        }else{
            ctx.beginPath();                                    // used to create a circle // say it should shart here
            ctx.arc(appleX, appleY, arcWH, 0, arcRad, false);    // create an ark (circle) ,x and y position, radius, starting angle, end angle , and if it should go counter clockwise
            ctx.fillStyle = appleColor;                         // set the color of the apple
            ctx.fill();                                         // fill the apple with the set color
            ctx.stroke();                                       // to actually draw the acr to the canvas
            newapple = false;
            //hellMode(canv,ctx,true);
        }

    } else {
        ctx.beginPath();                                    // used to create a circle // say it should shart here
        ctx.arc(appleX, appleY, arcWH, 0, arcRad, false);    // create an ark (circle) ,x and y position, radius, starting angle, end angle , and if it should go counter clockwise
        ctx.fillStyle = appleColor;                         // set the color of the apple
        ctx.fill();                                         // fill the apple with the set color
        ctx.stroke();                                       // to actually draw the acr to the canvas
        //hellMode(canv,ctx,false);
    }
};

function checkIfAppleDrawnOverSnake(canv, ctx,snake) {
    snake.forEach(function (item) {
        let xDistance = appleX - item.x;  // get x difference of the snake and the circle
        let yDistance = appleY - item.y;  // get y differecne fo the snake and the circle
        let xyDistance = Math.sqrt(Math.pow(xDistance,2)+ Math.pow(yDistance,2)); // squareroot of (xdifference times 2) + (ydifference times 2)

        if(xyDistance <= applewidth && xyDistance >= 0){    // check if the xyDistance is between 0 and the appleHeigt of the elemnts
            createNewCircle(canv, ctx,snake)
            return true;
        }
    });
    return false;
}

function snakeOver(snakeX, snakeY, canv, ctx, snakeSize) {
    if ((snakeX >= (appleX - applewidth / 2) && snakeX < (appleX + applewidth / 2)) && (snakeY < (appleY + appleheight / 2) && snakeY >= (appleY - applewidth / 2))) {
        // collision detection if the snake is in the range of the circle from the middle of the circle up the appleheight and applewidth to get the whole apple
        eatSoundPlay();
        createNewCircle(canv, ctx);  // if it is ture draw anohter circle
        newapple = true;
        return applePoints; // return the amount fo points you gain

    } else {
        snake.pop(); //snake grows by one rectangle
        return 0;


    }

}


