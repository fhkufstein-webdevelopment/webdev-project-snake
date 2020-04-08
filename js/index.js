function openManual() {
    document.getElementById("overlayManual").classList.add("open");
}

function closeManual() {
    document.getElementById("overlayManual").classList.remove("open");
}

function overlayFinished() {
    document.getElementById("overlayFinished").classList.add("open");
}

function playAgain() {
    location.reload();
}

function openHighscore() {
    document.getElementById("overlayHighscore").classList.add("open")

}

function closeHighscore() {
    document.getElementById("overlayHighscore").classList.remove("open")
}

function getFeedback() {
    let global =  document.getElementById("global").textContent;
    global = global.slice(8);
    let own = document.getElementById("own").textContent;
    own = own.slice(7);

    console.log("Global: " + global + ", Eigen: " + own) ;
    bgm.pause();
    if (userScore>global) {
        winSoundPlay();
        document.getElementById("feedback").textContent = "WOW!!! Sie haben den globalen Highscore geschlagen!"
    }else if (userScore>own){
        winSoundPlay();
        document.getElementById("feedback").textContent = "Glückwunsch! Sie haben Ihren persönlichen Highscore verbessert!"
    } else {
        looseSoundPlay();
        document.getElementById("feedback").textContent = "Schade! Leider kein neuer Highscore!"
    }
}

function openOverlayStart(){
    document.getElementById("overlayStart").classList.add("open");
}

function closeOverlayStart(){
    document.getElementById("overlayStart").classList.remove("open");
}