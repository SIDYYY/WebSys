<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="prac.css" type="text/css" rel="stylesheet">
    <title>Login</title>
</head>
<body>

                    <?php
                        session_start();

                        // Check if "Browse as Guest" button is clicked
                        if (isset($_POST["guest"])) {
                            // Set session username as "Guest"
                            $_SESSION["username"] = "Guest";
                            // Redirect to the guest page
                            header("Location: ../WeGROWforIM/guest.php");
                            exit;
                        }

                        // Check if the login form is submitted
                        if ($_SERVER["REQUEST_METHOD"] == "POST") {
                            // Connect to the PostgreSQL database
                            $conn = pg_connect("host=localhost port=5432 dbname=Login user=postgres password=Carl");
                            if (!$conn) {
                                echo "Failed to connect to database.";
                                exit;
                            }

                            // Sanitize user input to prevent SQL Injection
                            $username = pg_escape_string($conn, $_POST["username"] ?? "");
                            $password = pg_escape_string($conn, $_POST["password"] ?? "");

                            // Query to fetch user details including f_name
                            $query = "SELECT * FROM users WHERE username='$username' AND password='$password'";
                            $result = pg_query($conn, $query);
                            if (!$result) {
                                echo "Error in query: " . pg_last_error($conn);
                                exit;
                            }

                            // Check if user exists
                            if (pg_num_rows($result) == 1) {
                                // Fetch user details
                                $row = pg_fetch_assoc($result);
                                // Store f_name in session
                                $_SESSION["f_name"] = $row["f_name"];
                                // Redirect to the main page
                                header("Location: ../WeGROWforIM/wegrow.php");
                                exit;
                            } else {
                                // Display error message if username or password is invalid
                                $error_message = "Invalid username or password.";
                            }

                            // Close database connection
                            pg_close($conn);
                        }
                        ?>


    <div class="container">
        
        <h2>Login</h2>
        <div id="errorBanner" class="error-banner"></div>

        <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
            <label for="username">Username</label><br>
            <input type="text" placeholder="Username"id="username"required name="username"><br>
            <label for="password">Password </label><br>
            <input type="password"placeholder="Password" id="password"required name="password"><br><br>
            <input type="submit" value="Login">
            <input type="submit" name="guest" value="Browse as Guest" class="guest-button">
            <p> Dont have account yet? <span class="reg"><a href="register.html"> Sign Up </a></span>
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
