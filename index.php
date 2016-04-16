<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <title>Magic Mirror Page</title>
    
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link rel = "stylesheet" href="css/weather-icons.css">
    <link rel = "stylesheet" href="css/weather-icons-wind.css">
    
    <link href="css/magic-mirror.css" rel="stylesheet">
    
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    
    <script type="text/javascript" src="js/api-keys.js"></script>
    <script type="text/javascript" src="js/style-helpers.js"></script>
</head>
<body>
    <div class="container">
        <?php
        include("widgets/digital-clock-widget.php");
        
        include("widgets/compliment-widget.php");
        
        include("widgets/weather-widget.php");
        ?>
    </div>
</body>
</html>