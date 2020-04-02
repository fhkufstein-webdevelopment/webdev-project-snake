
/*  there are other libraries that could use "$" - so it is 100% save to use "jQuery" instead of "$"
    if you don't use any other libraries than jQuery you could still go with "$"
    so the following line would be
    $(document).ready(function() {
*/



function drawUserScore(scoreToAdd, snakeLenght) {
    userScore += scoreToAdd;
    document.getElementById("points").innerText = userScore; // upate points
    document.getElementById("animals").innerText = snakeLenght; // update lenght
}

function showGameFinishedDialog() {
    alert("Zeigt den Bildschirm mit Auswahlmöglichkeiten, neues Spiel, Spiel beenden, Highscoreliste ansehen");
}

function saveScore(userScore,gameStatus) {

    if (gameStatus) {
        $.ajax({
            'url': 'index',
            'method': 'post',
            'data': {'action': 'saveScore', 'score': userScore},
            'success': function (receivedData) {
                if (receivedData.result) {
                    //

                }
            }
        });

    }
}