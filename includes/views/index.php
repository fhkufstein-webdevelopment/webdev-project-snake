<?php

echo $this->header;

?>

<div class="wrapper">
    <main>
        <section class="game">
            <div class="score">
                <p class="points">0129</p>
                <p class="animals">12</p>
            </div>
            <canvas id="field" width="600" height="600"></canvas>
        </section>
        <section class="ol score"></section>
        <section class="ol user"></section>
    </main>
    <nav>
        <button role="button" aria-label="Score">Score</button>
        <button role="button" aria-label="User">User</button>
    </nav>
    <button class="question" role="button" aria-label="Manual">?</button>
</div>

<?php

echo $this->footer;

?>