<?php

echo $this->header;

?>
    <main class="login-page">
        <section class="login active">
            <header>
                <h2 class="title">Login</h2>
                <p class="intro">
                    Kein Account?<br>Dann können Sie sich <span class="toggle">hier registrieren</span>.
                </p>
                <?php if ($this->errorPasswd == true): ?>
                    <div class="alert" role="alert">
                        <h4>Benutzername/Passwort sind falsch!</h4>
                        <p>Bitte versuchen Sie es erneut.</p>
                    </div>
                <?php endif; ?>
            </header>
            <form method="post" action="login">
                <input type="text" name="username" id="username" value="" placeholder="Benutzername">

                <input type="password" name="password" id="password" value="" placeholder="Passwort">

                <button type="submit" class="btn btn-default">Anmelden</button>
                <input type="hidden" name="action" value="login">
            </form>
        </section>

        <section class="register-modal" tabindex="-1"
                 role="dialog" aria-labelledby="registerModalLabel">
            <div class="popup">
                <h2>Erfolgreiche Registrierung!</h2>
            </div>
            <header>
                <h2 class="title">Registrierung</h2>
                <p class="intro">
                    Bitte füllen Sie folgende Felder aus um einen Account anzulegen:
                </p>
                <div class="alert hidden" role="alert">
                    <h4>Benutzernamebereits vergeben!</h4>
                    <p>Bitte versuchen Sie einen anderen.</p>
                </div>
            </header>
            <form method="post" id="register-form">
                <input type="text" name="name" id="name" placeholder="Benutzernamen eingeben">
                <input type="password" name="pwd" id="pwd1" placeholder="Bitte Passwort eingeben (mind. 8 Zeichen)">
                <input type="password" name="pwd2" id="pwd2" placeholder="Bitte das Passwort wiederholen">
                <button type="submit" class="register">Registrieren</button>
                <button type="button" class="toggle">Abbrechen</button>
            </form>
        </section>
    </main>
<?php

echo $this->footer;

?>