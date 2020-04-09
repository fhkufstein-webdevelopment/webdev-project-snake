let bgm;                              // backgroundmusic
let eatSound;                         //sound when snake eats a fruit
let winSound;                         //sound when beating the global highscore
let looseSound;                       //sound when not beating the global highscore

function bgmPlay(){
    bgm =new Audio("sfx/bgm.mp3");
    bgm.play();
    bgm.loop=true;
}

function eatSoundPlay (){
    eatSound = new Audio("sfx/eatsound.mp3");
    eatSound.play();
}

function winSoundPlay(){
    winSound= new Audio("sfx/winsound.mp3");
    winSound.play();
}

function looseSoundPlay(){
    looseSound= new Audio("sfx/loosesound.mp3");
    looseSound.play();
}