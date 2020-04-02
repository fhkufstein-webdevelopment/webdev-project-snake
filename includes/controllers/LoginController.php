<?php

/**
 * @author Daniel Hoover <https://github.com/danielhoover>
 */
class LoginController extends Controller
{
    protected $viewFileName = "Login";
    protected $loginRequired = false;

    public function run()
    {
        $this->view->title = 'Login';

        if ($this->user->isLoggedIn) {
            $this->user->redirectToIndex();
        }

        $this->checkForPost();
    }

    private function checkForPost()
    {
        if (!empty($_POST) && isset($_POST['action'])) {
            // Login POST
            if ($_POST['action'] == 'login') {

                $username = $_POST['username'];
                $password = $_POST['password'];

                if ($username != "" && $password != "") {
                    if ($this->user->login($username, $password)) {
                        $this->user->redirectToIndex();
                    } else {
                        $this->view->errorPasswd = true;
                    }
                }
            }

            // Register POST
            if ($_POST['action'] == 'register') {
                $password = $_POST['pwd'];
                $username = $_POST['name'];

                // Username Check
                if (User::existsWithUsername($username) == false) {
                    User::createUser(array('username' => $username, 'password' => $password));

                    $jsonResponse = new JSON();
                    $jsonResponse->result = true;
                    $jsonResponse->setMessage("Benutzer wurde erfolgreich hinzugefügt!");
                    $jsonResponse->send();
                } else {
                    $jsonResponse = new JSON();
                    $jsonResponse->result = false;
                    $jsonResponse->setMessage("Benutzername bereits vergeben!");
                    $jsonResponse->send();
                }
            }
        }
    }
}