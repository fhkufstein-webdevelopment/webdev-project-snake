<?php

//define Routes
$route['/'] = array('controller' => 'GameController', 'uniqueName' => 'index');
$route['/index'] = array('controller' => 'GameController', 'uniqueName' => 'index');
$route['/index.html'] = array('controller' => 'GameController', 'uniqueName' => 'index');


$route['/login'] = array('controller' => 'LoginController', 'uniqueName' => 'login');
$route['/login.html'] = array('controller' => 'LoginController', 'uniqueName' => 'login');

$route['/logout'] = array('controller' => 'LogoutController', 'uniqueName' => 'logout');
$route['/logout.html'] = array('controller' => 'LogoutController', 'uniqueName' => 'logout');



