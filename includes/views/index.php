<?php

echo $this->header;

?>
    <main>
        <section class="game">
            <div class="score">
                <p class="points" id="points">0129</p>
                <p class="animals" id="animals">12</p>
            </div>
            <canvas id="field" class="sizer" width="600" height="600"></canvas>
        </section>
        <section class="ol score"></section>
        <section class="ol user"></section>
        <section id="overlay" class="overlay">
            <div class="overlay-content">
                <img id="arrows" src="images/arrowKeys.png" alt="Pfeiltasten">
                <p>Richtung der Schlange bestimmen</p>
                <img id="p" src="images/P.png" alt="P-Taste">
                <p>Spiel pausieren</p>
                <br><br>
                <button onclick="closeManual()">Spiel beginnen</button>
            </div>
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