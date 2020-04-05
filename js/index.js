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

function getFeedback(){
    let global=document.getElementById("global").innerHTML;
    let own=document.getElementById("points").innerHTML;
    if(own>50){
        document.getElementById("feedback").innerText="Glückwunsch! Sie haben die Highscore geschlagen!"
    }
    else{
        document.getElementById("feedback").innerText="Leider wurde die Highscore nicht geknackt!"
    }
}

