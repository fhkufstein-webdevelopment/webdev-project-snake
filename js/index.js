function playAgain() {
    location.reload();
}

function getFeedback() {
    let global = document.getElementById("global").textContent;
    global = global.slice(8);
    let own = document.getElementById("own").textContent;
    own = own.slice(7);

    console.log("Global: " + global + ", Eigen: " + own);
    bgm.pause();
    if (userScore > global) {
        winSoundPlay();
        document.getElementById("feedback").textContent = "WOW!!! Sie haben den globalen Highscore geschlagen!"
    } else if (userScore > own) {
        winSoundPlay();
        document.getElementById("feedback").textContent = "Glückwunsch! Sie haben Ihren persönlichen Highscore verbessert!"
    } else {
        looseSoundPlay();
        document.getElementById("feedback").textContent = "Schade! Leider kein neuer Highscore!"
    }
}

function toggleOverlay(element) {
    let tag = ".ol." + element;
    document.querySelector(tag).classList.toggle("closed");
}