<?php

echo $this->header;

?>
    <main class="login-page">
        <section class="login active">
            <header>
                <h2 class="title">Login</h2>
                <p class="intro">
                    Melden Sie sich bitte an um den Dienst nutzen zu können.<br>Sie besitzen noch keinen Account?<br>Dann
                    können Sie sich <span id="register">hier registrieren</span>.
                </p>
            </header>
            <form method="post" action="login">
                <?php if ($this->errorPasswd == true): ?>
                    <div class="alert alert-danger alert-dismissible fade in" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4>Benutzername und/oder Passwort sind falsch</h4>
                        <p>Prüfen Sie bitte ob Sie sich nicht vertippt haben und versuchen Sie es erneut!</p>
                    </div>
                <?php endif; ?>
                <input type="text" name="username" id="username" value="" placeholder="Benutzername">

                <input type="password" name="password" id="password" value="" placeholder="Passwort">

                <button type="submit" class="btn btn-default">Anmelden</button>
                <input type="hidden" name="action" value="login">
            </form>
        </section>


        <section class="modal<?php if ($registerError): ?>active<?php endif; ?>" id="registerModal" tabindex="-1"
                 role="dialog" aria-labelledby="registerModalLabel">
            <header>
                <h2 class="title">Registrierung</h2>
                <p class="intro">
                    Wir benötigen folgende Angaben um Sie für unseren Dienst registrieren zu können:
                </p>
            </header>
            <form method="post" action="login" class="col-xs-12">
                <input type="text" class="form-control" name="name" id="name" placeholder="Benutzernamen eingeben">
                <input type="password" name="pwd" class="form-control" id="pwd"
                       placeholder="Bitte Passwort eingeben (mind. 8 Zeichen)">
                <input type="password" name="pwd2" class="form-control" id="pwd2"
                       placeholder="Bitte das Passwort wiederholen">
                <input type="hidden" name="action" value="register">
                <button type="button" class="register">Registrieren</button>
                <button type="button" class="close">Abbrechen</button>
            </form>
        </section>
    </main>
<?php

echo $this->footer;

?>