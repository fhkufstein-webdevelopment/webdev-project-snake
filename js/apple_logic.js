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
let hellModeBlocks = [];

// create new circle
function createNewCircle(canv, ctx) {
    if (newapple == true) {
        appleX = Math.floor(Math.random() * (canv.width - (applewidth * 2)) + applewidth);  //create random x position with the max width of the canvas -1 // -*2 + applewith is that it cant go over the maxamount
        appleY = Math.floor(Math.random() * (canv.height - (appleheight * 2)) + applewidth); // create random y position with the max height of the canvas -1 // -*2 + applewith is that it cant go over the maxamount
        if(appleX%25 != 0){
            appleX -= (appleX%applewidth)+(applewidth)/2;
        }
        if (appleY%25 != 0){
            appleY -= (appleY%appleheight)+(appleheight)/2;
        }
        ctx.beginPath();                                    // used to create a circle // say it should shart here
        ctx.arc(appleX, appleY, arcWH, 0, arcRad, false);    // create an ark (circle) ,x and y position, radius, starting angle, end angle , and if it should go counter clockwise
        ctx.fillStyle = appleColor;                         // set the color of the apple
        ctx.fill();                                         // fill the apple with the set color
        ctx.stroke();                                       // to actually draw the acr to the canvas
        newapple = false;
        //hellMode(canv,ctx,true);
    } else {
        ctx.beginPath();                                    // used to create a circle // say it should shart here
        ctx.arc(appleX, appleY, arcWH, 0, arcRad, false);    // create an ark (circle) ,x and y position, radius, starting angle, end angle , and if it should go counter clockwise
        ctx.fillStyle = appleColor;                         // set the color of the apple
        ctx.fill();                                         // fill the apple with the set color
        ctx.stroke();                                       // to actually draw the acr to the canvas
        hellMode(canv,ctx,false);
    }
};

 // ----------------------------------------- Hellmode Test -----------------------------------------

function hellMode(canv,ctx,newBlock){
    if(newBlock == true){
        let deathBlockX = Math.floor(Math.random() * (canv.width - applewidth));
        let deathBlockY = Math.floor(Math.random() * (canv.height - appleheight));
        if(deathBlockX%25 != 0){
            deathBlockX -= (deathBlockX%25);
        }
        if(deathBlockY%25 != 0){
            deathBlockY -= (deathBlockY%25);
        }
        if(checkCollisionApple(deathBlockX,deathBlockY) == false && checkCollisionDeathBlock(deathBlockX,deathBlockY) == false){
            hellModeBlocks.push([deathBlockX,deathBlockY]);
        }
    }else{
        hellModeBlocks.forEach(function (item) {
            ctx.fillStyle = "FF0000";
            ctx.fillRect(item[0],item[1],applewidth,applewidth);

        });
    }
}

function checkCollisionDeathBlock(deathBlockX,deathBlockY) {
    hellModeBlocks.forEach(function (item) {
        if((deathBlockX >= (item[0]-(applewidth*10)) && deathBlockX <= (item[0]+(applewidth*10))) && (deathBlockY >= (item[1]-(applewidth*10)) && deathBlockY <= (item[1]+(applewidth*10)))){
            return true;
        }
    });
    return false;
};

function checkCollisionApple(deathBlockX,deathBlockY){
    if((deathBlockX >= (appleX - applewidth/2) && deathBlockX <= (appleX+applewidth/2))&& ((deathBlockY >= (appleY-appleheight*2))&& deathBlockY <= (appleY+appleheight*2))){
        return true;
    }return false;
};

// -------------------------------------------------------------------------------------------------

function snakeOver(snakeX, snakeY, canv, ctx, snakeSize) {
    if ((snakeX >= (appleX - applewidth / 2) && snakeX < (appleX + applewidth / 2)) && (snakeY < (appleY + appleheight / 2) && snakeY >= (appleY - applewidth / 2))) {
        // collision detection if the snake is in the range of the circle from the middle of the circle up the appleheight and applewidth to get the whole apple
        createNewCircle(canv, ctx);  // if it is ture draw anohter circle
        newapple = true;
        return applePoints; // return the amount fo points you gain

    } else {
        snake.pop(); //snake grows by one rectangle
        return 0;

    }

}


