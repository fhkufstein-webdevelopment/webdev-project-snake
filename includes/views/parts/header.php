<!DOCTYPE html>
<html lang="de">
<head>
    <title>SNAKE - <?php echo ($this->title == "") ? "404" : $this->title ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"/>
    <link href="css/main.css" rel="stylesheet">

    <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png">
    <link rel="manifest" href="site.webmanifest">
    <link rel="mask-icon" href="icons/safari-pinned-tab.svg" color="#9ac40a">
    <link rel="shortcut icon" href="icons/favicon.ico">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="msapplication-config" content="browserconfig.xml">
    <meta name="theme-color" content="#ffffff">

    <?php if ($this->current == "index"): ?>
        <script type="text/javascript" src="js/index.js"></script>
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

    <header class="logo">
        <h1>SNAKE</h1>
    </header>