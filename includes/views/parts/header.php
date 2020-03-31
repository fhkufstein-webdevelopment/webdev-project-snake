<!DOCTYPE html>
<html lang="de">
<head>
    <title>SNAKE</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"/>
    <link href="css/main.css" rel="stylesheet">
    <script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>

    <?php if ($this->current == "index"): ?>
        <!-- Import of the game Engine -->
        <script type="text/javascript" src="js/snake.js"></script>
        <script type="text/javascript" src="js/apple_logic.js"></script>
        <script type="text/javascript" src="js/movement.js"></script>
        <script type="text/javascript" src="js/collision.js"></script>
        <script type="text/javascript" src="js/score.js"></script>

    <?php elseif ($this->current == "login"): ?>
        <script type="text/javascript" src="js/login.js"></script>
    <?php endif; ?>

</head>
<body>
<div class="wrapper">
    <header>
        <h1>SNAKE</h1>
    </header>