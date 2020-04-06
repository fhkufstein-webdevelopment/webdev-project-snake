let hellModeBlocks = [];
let deathBlockwidth = 25;
let deathBlockheight = 25;

function hellMode(canv,ctx,newBlock){
    if(newBlock == true){
        let deathBlockX = Math.floor(Math.random() * (canv.width - deathBlockwidthth));
        let deathBlockY = Math.floor(Math.random() * (canv.height - deathBlockheightight));
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
            ctx.fillRect(item[0],item[1],deathBlockwidthth,deathBlockheight);

        });
    }
}

function checkCollisionDeathBlock(deathBlockX,deathBlockY) {
    hellModeBlocks.forEach(function (item) {
        if((deathBlockX >= (item[0]-(deathBlockwidthth*10)) && deathBlockX <= (item[0]+(deathBlockwidthth*10))) && (deathBlockY >= (item[1]-(deathBlockwidthth*10)) && deathBlockY <= (item[1]+(deathBlockwidthth*10)))){
            return true;
        }
    });
    return false;
};

function checkCollisionApple(deathBlockX,deathBlockY){
    if((deathBlockX >= (appleX - deathBlockwidthth/2) && deathBlockX <= (appleX+deathBlockwidthth/2))&& ((deathBlockY >= (appleY-deathBlockheightight*2))&& deathBlockY <= (appleY+deathBlockheightight*2))){
        return true;
    }return false;
};

function checkCollisionHellblockSnake(snake){
    hellModeBlocks.forEach(function (item) {
        if(snake[0].x >= item[0] && snake[0].x < item[0]+(deathBlockwidthth/2) && snake[0].y >= item[1] && snake[0].y < item[1]+(deathBlockheightight/2)){
            alert("aa");
        }
    });
}

