document.addEventListener("DOMContentLoaded", function () {
    let login = document.querySelector(".login");
    let registerModalToggles = document.querySelectorAll(".login-page .toggle");
    let registerModal = document.querySelector(".register-modal");
    let registerForm = registerModal.querySelector("#register-form");
    let registerFormFields = registerForm.querySelectorAll("input");
    let registerPopUp = registerModal.querySelector(".popup");
    let registerAlert = registerModal.querySelector(".alert");

    // Fügt zu beiden Trigger (hier registrieren/Abbrechen) den selben Event Listener hinzu
    registerModalToggles.forEach(toggle => {
        toggle.addEventListener("click", evt => {
            evt.preventDefault();

            registerModal.classList.toggle("active");
            login.classList.toggle("active");
        });
    });

    // Event Listener für Form Submit
    registerForm.addEventListener("submit", evt => {
            evt.preventDefault();

            let validUN = false;
            let validPW = false;
            let un = "";
            let pw = "";

            // Checkt alle Input Felder in einer ForEach Schleife
            registerFormFields.forEach(field => {
                let fieldText = field.value; // Speichert Input Text als Variable
                let passwordField = field.getAttribute('id').includes("pwd"); // Boolean checkt HTML ID

                if (passwordField) {
                    if (pw === "" && fieldText.length > 8) { // Erstes PW wird gespeichert falls länger als 8 Zeichen
                        pw = fieldText;
                    } else if (fieldText === pw && pw !== "") { // Zweites PW wird verglichen
                        validPW = true;
                    }
                } else if (fieldText.length !== 0) { // Hier kommt nur noch der Name an da PW oben ins If gehen
                    validUN = true;
                    un = fieldText;
                }
            });

            // Checkt alle gesammelten Werte ab und fügt dementsprechend Klassen und Listeneres hinzu
            registerFormFields.forEach(field => {
                let passwordField = field.getAttribute('id').includes("pwd");
                let userField = field.getAttribute('id').includes("name");

                if (passwordField && !validPW || userField && !validUN) {
                    field.classList.add("error");
                    field.addEventListener("keydown", () => {
                        field.classList.remove("error");
                        field.removeEventListener("keydown", null);
                    });
                } else {
                    field.classList.remove("error");
                }
            });

            // HTTP POST Method wenn Benutzername und Passwort passen
            if (validUN && validPW) {
                fetch('login', {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: "name=" + un + "&pwd=" + pw + "&action=register"
                })
                    .then(res => res.json())
                    .then(res => {
                        if (res.result) {
                            registerPopUp.classList.add("success");

                            window.setTimeout(function () {
                                location.reload();
                            }, 2000);
                        } else {
                            registerAlert.classList.remove("hidden");
                        }
                    });
            }
        }
    );
});