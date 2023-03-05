<!DOCTYPE html>
<html>
    <head>
        <title>PHP DEV APP</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="assets/devapp.css">
    </head>

    <body>
        <div class="MainContainer">
            <h1 id="output" style="text-align: center;">Answer</h1>
            <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
                <button name="action" type="submit" class="MainButton"></button>
            </form>
        </div>

        <?php
            function ButtonFuncs(){
                $ranNums = array(1, 2, 3 ,4 ,5, 6, 7, 8 ,9 ,10);
                $fullValue = $ranNums[array_rand($ranNums)];
                $myValue = 17;
                $myAnswer = $myValue * $fullValue; 

                $myOutput = $myAnswer;
                $myValue++;

                // Update HTML element with id "output" using JavaScript
                echo "<script>document.getElementById('output').innerHTML = '$myOutput';</script>";
            }

            if (isset($_POST['action'])) {
                ButtonFuncs();
            }
        ?> 

        <style>
            body{
                background-color: rgb(0, 153, 255);
                background-size: cover;
                background-repeat: no-repeat;
                background-attachment: fixed;
                height: 100vh;
                overflow-x: hidden;
                background-image: url(../HomeImg/Home5.png);
            }

            .MainContainer{
                font-size: 16px;
                width: 90vw;
                max-width: 37.5em;
                height: 90vh;
                max-height: 37.5em;
                padding: 3em 3em;
                background-color: #6bc4ff;
                position: absolute;
                transform: translate(-50%, -50%);
                top: 50%;
                left: 50%;
                border-radius: 0.6em;
                box-shadow: 1.2em 2em 3em rgba(41, 177, 255, 0.644);
            }

            .MainButton{
                position: absolute;
                width: 50px;
                height: 25px;
                padding: 25px 50px;
                bottom: 10%;
                left: 45%;
            }
        </style>
    </body>
</html>
