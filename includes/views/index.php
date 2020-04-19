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
        <section class="ol manual closed">
            <div class="overlay-content-manual">
                <h1 class="overlay-h1">Steuerung</h1>
                <div class="up button"> &#8657;</div>
                <br/>
                <div class="left button">&#8656;</div>
                <div class="down button">&#8659;</div>
                <div class="right button">&#8658;</div>
                <p>Richtung der Schlange bestimmen</p>
                <div class="p button">P</div>
                <p>um das Spiel zu pausieren</p>
                <button onclick="toggleOverlay('manual');" class="start">Spiel fortsetzen</button>
            </div>
        </section>
        <section class="ol start closed">
            <h1 class="overlay-h1">Steuerung</h1>
            <div class="buttons">
                <div class="up"><p>&#8656;</p></div>
                <div class="left"><p>&#8656;</p></div>
                <div class="down"><p>&#8656;</p></div>
                <div class="right"><p>&#8656;</p></div>
            </div>

            <p>Richtung der Schlange bestimmen</p>
            <p class="pause">P um das Spiel zu pausieren</p>

            <button onclick="toggleOverlay('start'); bgmPlay();" class="start">Spiel beginnen</button>
        </section>
        <section class="ol finished closed">
            <div class="sizer">
                <h1>Game Over</h1>
                <p id="feedback"></p>
                <button onclick="playAgain()">Neuer Versuch</button>
                <a href="logout">
                    <button aria-label="User">Spiel beenden</button>
                </a>
            </div>
        </section>
        <section class="ol score closed">
            <table class="sizer">
                <thead>
                <tr>
                    <th>Username</th>
                    <th>Score</th>
                </tr>
                </thead>
                <tbody>
                <?php $scoreArray = ScoreModel::getGlobalHighscoreList();
                foreach ($scoreArray as $row) :?>
                    <tr>
                        <td><?php print_r($row->name); ?></td>
                        <td><?php print_r($row->score); ?></td>
                    </tr>
                <?php endforeach; ?>
                </tbody>
            </table>
            <button onclick="toggleOverlay('score');" class="start">Zurück zum Spiel</button>
        </section>
        <section>
            <div>
                <button id="highscore" role="button" aria-label="Score">Highscore</button>
            </div>
            <button id="global" class="scoreButton">Global:
                <?php $result = ScoreModel::getGlobalHighscore();
                print_r($result->score) ?>
            </button>
            <button id="own" class="scoreButton">Eigen:
                <?php $result = ScoreModel::getHighscoreFromUser($this->username);
                print_r($result->highscore) ?>
            </button>
        </section>
    </main>
    <nav class="sizer">
        <?php if (LOGGED_IN == true): ?>
            <a href="logout">
                <button role="button" aria-label="User">Logout</button>
            </a>

            <button aria-label="User">User: <?php echo $this->username; ?></button>
        <?php endif; ?>
        <a>
            <button id="manual" class="question" role="button" aria-label="Manual">Hilfe</button>
        </a>

    </nav>


<?php

echo $this->footer;

?>