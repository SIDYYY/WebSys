

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="prac.css" type="text/css" rel="stylesheet">
    <link rel="icon" type="image/x-icon" href="imgs/favicon.ico">
    <title>Login</title>
</head>
<body>

<<<<<<< HEAD
                    <?php
                    session_start();

                    if (isset($_POST["guest"])) {
                        $_SESSION["username"] = "Guest";
                        header("Location: ../WeGROWforIM/guest.php");
                        exit;
                    }

=======
<?php
                    session_start();

>>>>>>> 1c4c912aa2b79db00370f1b7662799d1ef1c534b

                    //PARA MO WORK NI NEED NI E ADD SA XAMPP -> htdocs NA DIRECTORY T_T  
                    if ($_SERVER["REQUEST_METHOD"] == "POST") {
                        // CONNECTOR NI ILISI SAIMONG POSTGRE OG MAG CREATE KAA
                        $conn = pg_connect("host=localhost port=5432 dbname=Login user=postgres password=Carl");
                        if (!$conn) {
                            echo "Failed to connect to database.";
                            exit;
                        }

                        
                        $username = $_POST["username"] ?? "";
                        $password = $_POST["password"] ?? "";

                    
                        $query = "SELECT * FROM users WHERE username='$username' AND password='$password'";
                        $result = pg_query($conn, $query);
                        if (!$result) {
                            echo "Error in query: " . pg_last_error($conn);
                            exit;
                        }

                        //CHECK IF USER EXISTS
                        if (pg_num_rows($result) == 1) {
                            $_SESSION["username"] = $username;
<<<<<<< HEAD
                            header("Location: ../WeGROWforIM/wegrow.php");
=======
                            header("Location: ../WeGROW/wegrow.html");
>>>>>>> 1c4c912aa2b79db00370f1b7662799d1ef1c534b
                            exit;
                        } else {
                            //ELSE DISPLAY ERROR
                            $error_message = "Invalid username or password.";
                        }

                        // Close 
                        pg_close($conn);
<<<<<<< HEAD
                      }
                      ?>
=======
                    }
                    ?>
>>>>>>> 1c4c912aa2b79db00370f1b7662799d1ef1c534b

    <div class="container">
        
        <h2>Login</h2>
        <div id="errorBanner" class="error-banner"></div>

        <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
            <label for="username">Username</label><br>
            <input type="text" placeholder="Username"id="username" name="username"><br>
            <label for="password">Password </label><br>
            <input type="password"placeholder="Password" id="password" name="password"><br><br>
            <input type="submit" value="Login">
            <input type="submit" name="guest" value="Browse as Guest" class="guest-button">
            </form>
    </div>

    <script>
        // Check if there's an error message to display
        var errorMessage = "<?php echo $error_message; ?>";
        if (errorMessage) {
            // Display the error message banner
            var errorBanner = document.getElementById('errorBanner');
            errorBanner.innerText = errorMessage;
            errorBanner.style.display = 'block';

            // Hide the error banner after 5 seconds
            setTimeout(function() {
                errorBanner.style.display = 'none';
            }, 5000); // 5000 milliseconds = 5 seconds
        }
    </script>
</body>
</html>
