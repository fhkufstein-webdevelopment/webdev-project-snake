function openManual() {
    document.getElementById("overlayManual").classList.add("open");
}

function closeManual() {
    document.getElementById("overlayManual").classList.remove("open");
}

function overlayFinished() {
    document.getElementById("overlayFinished").classList.add("open");
}

function playAgain(){
    location.reload();
}

function openHighscore(){
    document.getElementById("overlayHighscore").classList.add("open")

}

function closeHighscore(){
    document.getElementById("overlayHighscore").classList.remove("open")
}

