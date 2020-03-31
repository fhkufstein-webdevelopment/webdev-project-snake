
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

/* ----------------------------------------------------------------------------------------------------------------- */
  // create new circle
 function createNewCircle(canv,ctx){
   if(newapple == true){
     appleX = Math.floor(Math.random()* (canv.width-(applewidth*2))+applewidth);  //create random x position with the max width of the canvas -1 // -*2 + applewith is that it cant go over the maxamount
     appleY = Math.floor(Math.random()* (canv.height-(appleheight*2))+applewidth); // create random y position with the max height of the canvas -1 // -*2 + applewith is that it cant go over the maxamount
     ctx.beginPath();                                    // used to create a circle // say it should shart here
     ctx.arc(appleX, appleY, arcWH, 0, arcRad,false);    // create an ark (circle) ,x and y position, radius, starting angle, end angle , and if it should go counter clockwise
     ctx.fillStyle = appleColor;                         // set the color of the apple
     ctx.fill();                                         // fill the apple with the set color
     ctx.stroke();                                       // to actually draw the acr to the canvas
     newapple = false;
   }else{
     ctx.beginPath();                                    // used to create a circle // say it should shart here
     ctx.arc(appleX, appleY, arcWH, 0, arcRad,false);    // create an ark (circle) ,x and y position, radius, starting angle, end angle , and if it should go counter clockwise
     ctx.fillStyle = appleColor;                         // set the color of the apple
     ctx.fill();                                         // fill the apple with the set color
     ctx.stroke();                                       // to actually draw the acr to the canvas
   }
 };

 function snakeOver(snakeX,snakeY,canv,ctx,snakeSize){
   if(((snakeX < (appleX+applewidth/2) && snakeX > (appleX-applewidth/2)) || (snakeX+snakeSize < (appleX+applewidth/2) && snakeX+snakeSize > (appleX-applewidth/2)))  && ((snakeY < (appleY+appleheight/2) && snakeY > (appleY-applewidth/2))||((snakeY+snakeSize < (appleY+appleheight/2) && snakeY+snakeSize > (appleY-applewidth/2))))){
     // collision detection if the snake is in the range of the circle from the middle of the circle up the appleheight and applewidth to get the whole apple
     createNewCircle(canv,ctx);  // if it is ture draw anohter circle
     newapple = true;
     return applePoints; // return the amount fo points you gain
   }else{
     return 0;
   }

 };
 /* ----------------------------------------------------------------------------------------------------------------- */
