
/*  there are other libraries that could use "$" - so it is 100% save to use "jQuery" instead of "$"
    if you don't use any other libraries than jQuery you could still go with "$"
    so the following line would be
    $(document).ready(function() {
*/
/*jQuery(document).ready(function() {

    // if variable gameFinished is set true then save score
    if (gameFinished){
        saveScore(userScore);
    }
});*/


function darwUserScore(scoreToAdd,snakeLenght) {
    userScore += scoreToAdd;
    document.getElementById("points").innerText = userScore; // upate points
    document.getElementById("animals").innerText = snakeLenght; // update lenght
}

function showScoreGlobal() {
    alert("Zeigt die Bestenliste");
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
                    location.reload(); // reopens the game
                }
            }
        });
        console.log("saveScore done");
    }
}