function drawUserScore(scoreToAdd, snakeLenght) {
    userScore += scoreToAdd;
    document.getElementById("points").innerText = userScore; // update points
    document.getElementById("animals").innerText = snakeLenght - 1; // update length
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



