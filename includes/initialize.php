<?php

// Import Config
require_once(__DIR__ . '/config.php');

// Cookie Check
session_start();
// we need to do this - in order to determine if a user is logged in or not
// we learned already, that cookies are not good to store sensitive information because it can be changed by the user
// the session_start will look if there is a session cookie - if there is no cookie it creates one and sets a sessionId

// Class Initializer
if(!function_exists('classAutoLoader'))
{
	function classAutoLoader($fileName)
	{
		if(file_exists(__DIR__.'/classes/'.$fileName.'.php'))
		{
			require_once(__DIR__.'/classes/'.$fileName.'.php');
		}
		else if(file_exists(__DIR__.'/models/'.$fileName.'.php'))
		{
			require_once(__DIR__.'/models/'.$fileName.'.php');
		}
		else if(file_exists(__DIR__.'/controllers/'.$fileName.'.php'))
		{
			require_once(__DIR__.'/controllers/'.$fileName.'.php');
		}
		else
		{
			throw new Exception("Unable to load $fileName.");
		}
	}
}

spl_autoload_register('classAutoLoader');


