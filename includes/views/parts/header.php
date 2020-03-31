<!DOCTYPE html>
<html lang="en">
<head>
    <title><?php echo $this->title; ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">

    <?php if ($this->current == "login"): ?>
        <link href="css/toastr.min.css" rel="stylesheet">
    <?php endif; ?>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"/>
    <link href="css/main.css" rel="stylesheet">

    <script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>

    <?php if ($this->current == "index"): ?>
        <!-- Import of the game Engine -->
        <script type="text/javascript" src="js/snake.js"></script>
        <script type="text/javascript" src="js/apple_logic.js"></script>
        <script type="text/javascript" src="js/movement.js"></script>
        <script type="text/javascript" src="js/collision.js"></script>
        <script type="text/javascript" src="js/score.js"></script>


    <?php elseif ($this->current == "register"): ?>
        <script type="text/javascript" src="js/register.js"></script>
    <?php elseif ($this->current == "login"): ?>
        <script type="text/javascript" src="js/toastr.min.js"></script>
        <script type="text/javascript" src="js/login.js"></script>
    <?php endif; ?>

</head>
<body>
<div class="wrapper">
    <header>
        <?php if (LOGGED_IN == true): ?>
            <nav class="navbar navbar-default">
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="logout">(Logout)</a></li>
                    </ul>
                    <p class="navbar-text navbar-right"><strong class="username"><?php echo $this->username; ?></strong>
                    </p>
                </div>
            </nav>
            <h1>SNAKE</h1>
        <?php else: ?>
            <h1>SNAKE</h1>
        <?php endif; ?>
    </header>