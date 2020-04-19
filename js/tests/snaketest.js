function checkSupported() {
    let canvas = document.getElementById('field');

    if (canvas.getContext) {
        // Canvas wird unterstützt
        let ctx = canvas.getContext('2d');
        let box = 25;
        let canvasSize = 23;

        // Variablendeklarierung Schlange
        let snake = [];
        //Anfangsposition Schlange
        snake [0] = {
            x: Math.floor(canvasSize / 2 * box),
            y: Math.floor(canvasSize / 2 * box)
        };
        //Richtung bestimmen mit Knopfbelegung
        let dir;
        document.addEventListener("keydown", direction);

        function direction(event) {
            if (event.keyCode === 37) {
                dir = "LEFT";
            } else if (event.keyCode === 38) {
                dir = "UP";
            } else if (event.keyCode === 39) {
                dir = "RIGHT";
            } else if (event.keyCode === 40) {
                dir = "DOWN";

            }
        }

        function draw() {
            //Hintergrund malen
            ctx.fillStyle = "lightgreen";
            ctx.fillRect(box, box, canvasSize * box - box, canvasSize * box - box);
            //Schlangenkopf malen sowie weitere Glieder hinzufügen
            for (let i = 0; i < snake.length; i++) {
                ctx.fillStyle = "black";
                ctx.fillRect(snake[i].x, snake[i].y, box, box);
            }
            //Schlange bewegen
            if (dir === "LEFT")
                snake[0].x -= box;
            if (dir === "RIGHT")
                snake[0].x += box;
            if (dir === "UP")
                snake[0].y -= box;
            if (dir === "DOWN")
                snake[0].y += box;
        }


        let game = setInterval(draw, 100);

    } else {
        // Canvas wird nicht unterstützt
        alert("Fehler! Canvas wird von diesem Browser nicht unterstützt! Bitte wechseln Sie zu einem anderem Browser");
    }
}