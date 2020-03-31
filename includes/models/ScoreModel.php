<?php

class ScoreModel
{
	public static function getHighscoreFromUser($id)
	{
		$db = new Database();

        //returns the highest score of the current user. Should be visible during the game
		$sql = "SELECT max(score) FROM highscore WHERE user_id=".intval($id);

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

	public static function createNewScore($userID,$score)
	{
		$db = new Database();

		$sql = "INSERT INTO higscore(score,user_id) VALUES('".$db->escapeString($score['score'])."','".$db->escapeString($userID['user_id'])."','";
		$db->query($sql);

		/*$data['id'] = $db->insertId();

		return (object) $data;*/
	}

	/*public static function saveAddress($data)
	{
		$db = new Database();

		$sql = "UPDATE address SET firstname='".$db->escapeString($data['firstname'])."',lastname='".$db->escapeString($data['lastname'])."',street='".$db->escapeString($data['street'])."',zip='".$db->escapeString($data['zip'])."',city='".$db->escapeString($data['city'])."' WHERE id=".intval($data['id']);
		$db->query($sql);

		return (object) $data;
	}*/

}