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
        <section id="overlayManual" class="overlay">
            <div class="overlay-content-manual">
                <h1 class="overlay-h1">Steuerung</h1>
                <div class="up button"> &#8657;</div>
                <br/>
                <div class="left button">&#8656;</div>
                <div class="down button">&#8659;</div>
                <div class="right button">&#8658;</div>
                <p>Richtung der Schlange bestimmen</p>
                <div class="p button">P</div>
                <p>Spiel pausieren</p>
                <button onclick="closeManual()" class="start">Spiel fortsetzen</button>
            </div>
        </section>
        <section id="overlayStart" class="overlay">
            <div class="overlay-content-start">
                <h1 class="overlay-h1">Steuerung</h1>
                <div class="up button"> &#8657;</div>
                <br/>
                <div class="left button">&#8656;</div>
                <div class="down button">&#8659;</div>
                <div class="right button">&#8658;</div>
                <p>Richtung der Schlange bestimmen</p>
                <div class="p button">P</div>
                <p>Spiel pausieren</p>
                <button onclick="closeOverlayStart(); bgmPlay()" class="start">Spiel beginnen</button>
            </div>
        </section>
        <section id="overlayFinished" class="overlay">
            <div class="overlay-content-finished">
                <h1 class="overlay-h1">Game Over</h1>
                <p id="feedback"></p>
                <div>
                    <button onclick="playAgain()" class="start">neuer Versuch</button>
                    <a href="logout">
                        <button class="start" aria-label="User">Spiel beenden</button>
                    </a>
                </div>
            </div>
        </section>
        <section id="overlayHighscore" class="overlay">
            <div class="overlay-content-highscore">
                <h1 class="overlay-h1">Highscore</h1>
                <div align="center">
                    <table id="tableScore">
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
                                <td><?php print_r($row->name);  ?></td>
                                <td><?php print_r($row->score);  ?></td>
                            </tr>
                        <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
                <button onclick="closeHighscore()" class="start">Zurück zum Spiel</button>
            </div>
        </section>
        <section>
            <div align="center">
                <button id="highscore" role="button" aria-label="Score">Highscore</button>
            </div>
            <button id="global" class="scoreButton">Global:
                <?php $result = ScoreModel::getGlobalHighscore();
                print_r($result->score)?>
            </button>
            <button id="own" class="scoreButton">Eigen:
                <?php $result= ScoreModel::getHighscoreFromUser($this->username);
                print_r($result->highscore)?>
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
        <button id="manual" class="question" role="button" aria-label="Manual">Hilfe</button>
    </nav>


<?php

echo $this->footer;

?>