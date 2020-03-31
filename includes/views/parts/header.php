<!DOCTYPE html>
<html lang="de">
<head>
	<title><?php echo $this->title; ?></title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta charset="utf-8">
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" rel="stylesheet">
	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
	<link href="css/bootstrap.min.css" rel="stylesheet">
	<link href="css/bootstrap-theme.min.css" rel="stylesheet">

    <!-- Import of the game Engine -->
    <script type="text/javascript" src="js/snake.js"></script>
    <script type="text/javascript" src="js/apple_logic.js"></script>
    <script type="text/javascript" src="js/snaketest.js"></script>


	<?php if($this->current == "login"): ?>
		<link href="css/toastr.min.css" rel="stylesheet">
	<?php endif; ?>

		<link href="css/main.css" rel="stylesheet">


		<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
	<script type="text/javascript" src="js/bootstrap.min.js"></script>

	<?php if($this->current == "index"): ?>
        <!-- Import of the game Engine -->
        <script type="text/javascript" src="js/snake.js"></script>
        <script type="text/javascript" src="js/apple_logic.js"></script>
        <script type="text/javascript" src="js/snaketest.js"></script>

		<script type="text/javascript" src="js/score.js"></script>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"/>
        <link rel="stylesheet" href="../../css/style.css" />
	<?php elseif($this->current == "register"): ?>
		<script type="text/javascript" src="js/register.js"></script>
	<?php elseif($this->current == "login"): ?>
		<script type="text/javascript" src="js/toastr.min.js"></script>
		<script type="text/javascript" src="js/login.js"></script>
	<?php endif; ?>

</head>
<body>
<header>
	<div class="inner">
        <?php if(LOGGED_IN == true): ?>
			<nav class="navbar navbar-default">
				<div class="container-fluid">
					<!-- Brand and toggle get grouped for better mobile display -->
					<div class="navbar-header">
						<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>

						</button>
						<a class="navbar-brand active">Snake</a>
					</div>

					<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">


						<ul class="nav navbar-nav navbar-right">
							<li><a href="logout">(Abmelden)</a></li>
						</ul>

						<p class="navbar-text navbar-right">Angemeldet als <strong class="username"><?php echo $this->username; ?></strong></p>

					</div>
				</div>
			</nav>
		<?php else: ?>
            <div class="logo">
                <div class="name">Snake</div>
                <div class="version">1.0</div>
            </div>
		<?php endif; ?>

	</div>
</header>