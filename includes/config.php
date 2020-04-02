<?php

// Error Report Config
error_reporting(E_ALL & ~E_NOTICE);

// View Config
define('VIEW_DIRECTORY', __DIR__.'/views/');

// Config
define('URL_PATH', '/webdev-project-snake');
define('LOGIN_URL', 'login');
define('LOGOUT_URL', 'logout');
define('INDEX_URL', 'index');

// DB Config
define('DB_HOST', 'localhost');
define('DB_NAME', 'snakeGame');
define('DB_USER', 'snakeDbUser');
define('DB_PASS', 'snake12345!');

// Routes
$route['/'] = array('controller' => 'GameController', 'uniqueName' => 'index');
$route['/index'] = array('controller' => 'GameController', 'uniqueName' => 'index');
$route['/index.html'] = array('controller' => 'GameController', 'uniqueName' => 'index');

$route['/login'] = array('controller' => 'LoginController', 'uniqueName' => 'login');
$route['/login.html'] = array('controller' => 'LoginController', 'uniqueName' => 'login');

$route['/logout'] = array('controller' => 'LogoutController', 'uniqueName' => 'logout');
$route['/logout.html'] = array('controller' => 'LogoutController', 'uniqueName' => 'logout');
