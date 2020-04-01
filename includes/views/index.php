<?php

echo $this->header;

?>

    <div class="wrapper">
        <main>
            <section class="game">
                <div class="score">
                    <p class="points" id="points">0129</p>
                    <p class="animals" id="animals">12</p>
                </div>
                <canvas id="field" width="600" height="600"></canvas>
            </section>
            <section class="ol score"></section>
            <section class="ol user"></section>
        </main>
        <nav>
            <button role="button" aria-label="Score">Score</button>
            <?php if (LOGGED_IN == true): ?>
                <a href="logout">
                    <button role="button" aria-label="User">Logout</button>
                </a>
                <button role="button" aria-label="User"><?php echo $this->username; ?></button>
            <?php endif; ?>
        </nav>
        <button class="question" role="button" aria-label="Manual" id="manual">?</button>
    </div>

<?php

echo $this->footer;

?>