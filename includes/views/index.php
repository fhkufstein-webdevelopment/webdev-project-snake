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
            <div class="presskey"><p>Pfeiltaste drücken um zu starten!</p></div>
            <div class="unpause hidden"><p>P drücken um weiterzuspielen!</p></div>
            <canvas id="field" class="sizer" width="600" height="600"></canvas>
        </section>
        <section class="ol manual init closed">
            <h1 class="overlay-h1">Steuerung</h1>
            <div class="buttons">
                <div class="up">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25 10.5V40M25 10.5L15 20M25 10.5L35 20"/>
                    </svg>
                </div>
                <div class="left">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 25L40 25M10.5 25L20 35M10.5 25L20 15"/>
                    </svg>
                </div>
                <div class="down">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25 39.5L25 10M25 39.5L35 30M25 39.5L15 30"/>
                    </svg>
                </div>
                <div class="right">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M39.5 25L10 25M39.5 25L30 15M39.5 25L30 35"/>
                    </svg>
                </div>
            </div>

            <p>Richtung der Schlange bestimmen</p>
            <div class="pause">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 36V15H32V18H35V27H32V30H20V36H14ZM20 27H29V18H20V27Z"/>
                </svg>
                <p>Spiel zu pausieren</p>
            </div>

            <button onclick="toggleOverlay('manual');" class="continue">Spiel fortsetzen</button>
            <button onclick="toggleOverlay('manual'); removeInitClass(); addControls()" class="begin">Spiel beginnen
            </button>
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
    </main>
    <nav>
        <?php if (LOGGED_IN == true): ?>
            <a href="logout">
                <button role="button" aria-label="User">Logout</button>
            </a>

            <div class="dropdown hidden">
                <button onclick="toggleDropdown()" aria-label="User"><?php echo $this->username; ?> <span>&#60;</span>
                </button>

                <section class="scores hidden">
                    <button onclick="toggleOverlay('score'); toggleDropdown()" role="button" aria-label="Score">Scores</button>

                    <p class="global">G: <span><?php $result = ScoreModel::getGlobalHighscore();
                            print_r($result->score) ?></span></p>
                    <p class="personal">P: <span><?php $result = ScoreModel::getHighscoreFromUser($this->username);
                            print_r($result->highscore) ?></span></p>
                </section>
            </div>
        <?php endif; ?>
        <button onclick="toggleOverlay('manual')" role="button" aria-label="Manual">Hilfe</button>
    </nav>


<?php

echo $this->footer;

?>
