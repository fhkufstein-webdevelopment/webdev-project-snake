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
        <section id="ol manual" class="ol manual">
            <img id="arrows" src="/additional-files/images/arrowKeys.png">
            <p>Richtung der Schlange bestimmen</p>
            <img id="p" src="/additional-files/images/P.png">
            <p>Spiel pausieren</p>
            <button onclick="closeManual()" id="start">Spiel beginnen</button>
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