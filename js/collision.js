//check collision
function exitWidth(snakeX,canvas,box) {
    if(snakeX>= canvas.width){      // check if x position is greater then the max with of the canvas (right side)
        snakeX = 0;                 // set the position to 0 = the left side
    }else if (snakeX < 0){       // check if x position is under -10 (left side)
        snakeX = canvas.width-box;      // set the postion to the max of the canvas = right side
    }
    return snakeX;                  // return the old or new x position of the snake
}
function exitHeight(snakeY,canvas,box){
    if (snakeY >= canvas.height){   // check if y postion is greater then the max height of the canvas (bottom)
        snakeY = 0;                 // set the postion to 0 = top side
    }else if (snakeY < 0){       // check if y postion is under -10 (top side)
        snakeY = canvas.height-box;     // set the postion to max widht of the canvas = bottom side
    }
    return snakeY;                  // return the old or new y position ot the snake
}

function checkInnerCollision(headX,headY,partX,partY,i,box){
    if(i > 0){                           // check if it is not the head element 2 times
        let xDistance = headX - partX;  // get x difference of the head and the tail
        let yDistance = headY - partY;  // get y differecne fo the head and the tail

        let xyDistance = Math.sqrt(Math.pow(xDistance,2)+ Math.pow(yDistance,2)); // squareroot of (xdifference times 2) + (ydifference times 2)

        if(xyDistance <= box-1 && xyDistance >= 0){    // check if the xyDistance is between 0 and the box size of the elemnts -1 because if you the full pox there would collide

            showGameFinishedDialog();
            checkGameStatus(true);
        }
    }
}