<?php
session_start();


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
        // Authentication successful, set session variable
        $_SESSION["username"] = $username;
        header("Location: ../wegrow.html");
        exit;
    } else {
        //ELSE DISPLAY ERROR
        echo "Invalid username or password.";
    }

    // Close 
    pg_close($conn);
}
?>

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
    <div class="container">
        <h2>Login</h2>
        <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
            <label for="username">Username:</label><br>
            <input type="text" id="username" name="username"><br>
            <label for="password">Password:</label><br>
            <input type="password" id="password" name="password"><br><br>
            <input type="submit" value="Login">
        </form>
    </div>
</body>
</html>
