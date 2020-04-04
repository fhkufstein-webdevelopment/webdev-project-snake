
function gameLogout() {


    fetch('index', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "&action=gameLogout"
    })
        .then(res => res.json())
        .then(res => console.log(res))

}