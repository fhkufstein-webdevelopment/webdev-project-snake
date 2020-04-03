<?php

echo $this->header;

?>
    <main>
        <section class="game">
            <div class="score">
                <p class="points" id="points">0129</p>
                <p class="pause" id="pause">Game Paused</p>
                <p class="animals" id="animals">12</p>
            </div>
            <canvas id="field" class="sizer" width="600" height="600"></canvas>
        </section>
        <section class="ol score"></section>
        <section class="ol user"></section>
        <section id="overlay" class="overlay">
            <div class="overlay-content">
                <h1>Steuerung</h1>
                    <div class="up button"> &uarr;</div>
                    <br/>
                    <div class="left button">&larr;</div>
                    <div class="down button">&darr;</div>
                    <div class="right button">&rarr;</div>
                    <p>Richtung der Schlange bestimmen</p>
                    <div class="p button">P<i class="fa fa-arrow-right"></i></div>
                    <p>Spiel pausieren</p>
                <button onclick="closeManual()" class="start">Spiel beginnen</button>
        </section>
    </main>
    <nav class="sizer">
        <button role="button" aria-label="Score">Score</button>
        <?php if (LOGGED_IN == true): ?>
            <a href="logout">
                <button role="button" aria-label="User">Logout</button>
            </a>
            <button role="button" aria-label="User"><?php echo $this->username; ?></button>
        <?php endif; ?>
    </nav>
    <button onclick="openManual()" id="manual" class="question" role="button" aria-label="Manual">?</button>

<?php

echo $this->footer;

?>