<?php

/**
 * @author Daniel Hoover <https://github.com/danielhoover>
 */
class GameController extends Controller
{
	protected $viewFileName = "index"; //this will be the View that gets the data...
	protected $loginRequired = true;

	protected $highscoreList;



	public function run()
	{
        $this->view->title = "Game";
		$this->view->username = $this->user->username;

        $this->checkForSaveScorePost();
        $this->checkForGlobalHighscore();

    }

    private function checkForSaveScorePost()
    {
        if(isset($_POST['action']) && $_POST['action'] == 'saveScore')
        {

            $score = $_POST['score'];
            $user = $this->user->username;

            //now we need our Model to save the values
            ScoreModel::createNewScore($user,$score); //:: ist only working when we define a Method as static. That means one can use the method without instanciating an object


            //finally send a JSON message that we saved the values...
            $jsonResponse = new JSON();
            $jsonResponse->result = true; //this is important, as the frontend expects result true if everything was ok
            $jsonResponse->setMessage("Saved the values!"); //(optional)
            $jsonResponse->send();

        }
    }

    private function checkForGlobalHighscore()
    {
        if(isset($_GET['action']) && $_GET['action'] == 'getHighscoreList')
        {

            //now we need our Model to get the Highscore List
            $this->highscoreList = ScoreModel::getGlobalHighscoreList(); //:: ist only working when we define a Method as static. That means one can use the method without instanciating an object

            //finally send a JSON message that we saved the values...
            $jsonResponse = new JSON();
            $jsonResponse->result = true; //this is important, as the frontend expects result true if everything was ok
            $jsonResponse->setMessage("Saved the values!"); //(optional)
            $jsonResponse->send();

            //return the Values

        }
    }

}