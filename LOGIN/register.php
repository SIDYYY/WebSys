

<!--<?php
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
    $pass = pg_escape_string($conn, $_POST['password']);
    $email = pg_escape_string($conn, $_POST['email']);
    $fname = pg_escape_string($conn, $_POST['firstname']);
    $lname = pg_escape_string($conn, $_POST['lastname']);
    $age = pg_escape_string($conn, $_POST['age']);

    // Create SQL query to insert data into table
    $sql = "INSERT INTO users (username, password,email,f_name,l_name,age) VALUES ('$name', '$pass',$email,$fname,$lname,$age)";

    // Execute query
    $result = pg_query($conn, $sql);
    if ($result) {
        header("Location: ..\LOGIN\Login.php");
        exit;
    } else {
        echo "Error: " . $sql . "<br>" . pg_last_error($conn);
    }

    // Close database connection
    pg_close($conn);
}
?>!-->
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
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>
        <div class="name-container">
            <div>
                <br><label for="firstname">First Name</label>
                <input type="text" id="firstname" name="firstname" placeholder="First Name">
            </div>
            <div>
                <br><label for="lastname">Last Name</label>
                <input type="text" id="lastname" name="lastname" placeholder="Last Name">
            </div>
        </div>
        <div>
            <br><label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email">
        </div>
        <div>
            <br><label for="age">Age</label>
            <input type="number" id="age" name="age" placeholder="Age">
        </div>
        <div>
            <br><label for="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Username">
        </div>
        <div>
            <br><label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Password">
        </div>
        <br><input type="submit" value="Submit">
        <p> Already have an account?<span class="reg"><a href="Login.php"> Login </a></span></p></br>
    </form>
    </div>
</body>
</html>
