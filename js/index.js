function playAgain() {
    location.reload();
}

function getFeedback() {
    let global = document.querySelector(".global span").textContent;
    let own = document.querySelector(".personal span").textContent;

    console.log("Global: " + global + ", Personal: " + own);
    bgm.pause();
    if (userScore > global) {
        winSoundPlay();
        document.querySelector("#feedback").textContent = "WOW!!! Sie haben den globalen Highscore geschlagen!"
    } else if (userScore > own) {
        winSoundPlay();
        document.querySelector("#feedback").textContent = "Glückwunsch! Sie haben Ihren persönlichen Highscore verbessert!"
    } else {
        looseSoundPlay();
        document.querySelector("#feedback").textContent = "Schade! Leider kein neuer Highscore!"
    }
}

function toggleOverlay(element) {
    let tag = ".ol." + element;
    document.querySelector(tag).classList.toggle("closed");
}

function removeInitClass() {
    document.querySelector(".manual").classList.remove("init");
}

function toggleDropdown() {
    document.querySelector(".dropdown").classList.toggle("hidden");
}