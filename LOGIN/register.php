//change the connectors information, MAY HAHAHAHA
//AFTER REGISTRATION MO BALIK NIS LOGIN SHARE SILAG STYLE NI LOGIN BTW!

<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Connect to your database
    $conn = pg_connect("host=localhost port=5432 dbname=Login user=postgres password=Carl");
    if (!$conn) {
        echo "Failed to connect to database.";
        exit;
    }

    // Sanitize user input to prevent SQL Injection
    $name = pg_escape_string($conn, $_POST['username']);
    $email = pg_escape_string($conn, $_POST['password']);

    // Create SQL query to insert data into table
    $sql = "INSERT INTO users (username, password) VALUES ('$name', '$email')";

    // Execute query
    $result = pg_query($conn, $sql);
    if ($result) {
        // Redirect to the main page after successful registration
        header("Location: ..\LOGIN\Login.php");
        exit;
    } else {
        echo "Error: " . $sql . "<br>" . pg_last_error($conn);
    }

    // Close database connection
    pg_close($conn);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet"type="text/css" href="prac.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration</title>
</head>
<body>
    <div class="container">
    <h2> REGISTRATION </h2>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <label for="username">Username</label><br>
        <input type="text" name="username" placeholder="username">
        <label for="password">Password</label><br>
        <input type="password" name="password" placeholder="password">
        <input type="submit" value="Submit">
        <p> Already have an account?<span class="reg"><a href="Login.php"> Login </a></span></p></br>
    </form>
    </div>
</body>
</html>
