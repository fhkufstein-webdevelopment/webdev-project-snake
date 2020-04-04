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
    confirm("Game Over! \n Wollen sie nochmal spielen? \n Mit Cancel loggen Sie sich aus");
    if (confirm) {
        location.reload();
    } else {
        location.assign("/logout");
    }
}

function saveScore(userScore, gameStatus) {

    if (gameStatus) {
        fetch('index', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "score=" + userScore + "&action=saveScore"
        })
            .then(res => res.json())
            .then(res => console.log(res))
    }
}

