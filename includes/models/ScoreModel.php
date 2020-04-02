<?php

class ScoreModel
{
	public static function getHighscoreFromUser($user)
	{
		$db = new Database();

        //returns the highest score of the current user. Should be visible during the game
		$sql = "SELECT max(score) FROM highscore WHERE user=".intval($user);

		$result = $db->query($sql);

		if($db->numRows($result) > 0)
		{
			return $db->fetchObject($result);
		}

		return null;
	}

	public static function getGlobalHighscoreList()
	{
		$db = new Database();

		// returns a sorted list with all highscores
		$sql = "SELECT user.name, highscore.score FROM highscore join user on highscore.user_id = user.id order by highscore.score desc";
		$result = $db->query($sql);

		if($db->numRows($result) > 0)
		{
			$highscoreArray = array();

			while($row = $db->fetchObject($result))
			{
				$highscoreArray[] = $row;
			}

			return $highscoreArray;
		}

		return null;
	}

    public static function getGlobalHighscore()
    {
        $db = new Database();

        // returns only the global absolute Highscore
        $sql = "SELECT user.name, max(highscore.score) FROM highscore join user on highscore.user_id = user.id";
        $result = $db->query($sql);

        if($db->numRows($result) > 0)
        {
            return $db->fetchObject($result);
        }

        return null;
    }

	public static function createNewScore($user,$score)
	{
		$db = new Database();

        $user = $db->escapeString($user);
        $score = $db->escapeString($score);


		$sql = "INSERT INTO `highscore`(`score`, `user`) VALUES ('".$score."','".$user."')";
		$db->query($sql);


	}


}