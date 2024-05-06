<?php
$conn = pg_connect("host=localhost dbname=Login user=postgres password=Carl");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if(isset($_POST['name']) && isset($_POST['description']) && isset($_POST['price']) && isset($_POST['stock'])) {
        $name = pg_escape_string($_POST['name']);
        $description = pg_escape_string($_POST['description']);
        $stock = pg_escape_string($_POST['stock']);
        $price = pg_escape_string($_POST['price']);

        $query = "INSERT INTO items (name, description, price) VALUES ('$name', '$description', '$price')";
        $result = pg_query($conn, $query);

        if ($result) {
            header("Location: home.php");
        exit();
        }  else {
        echo "Invalid POST data.";
    }
}
}

pg_close($conn);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <link href="form.css" rel="stylesheet">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Item</title>
</head>
<body>
    <div class="container">
    <h2>CREATE ITEM</h2>
    <form action="" method="post">
        <label for="name">Name</label><br>
        <input type="text" id="name" required name="name"><br>
        <label for="description">Description</label><br>
        <textarea id="description" required name="description"></textarea><br>
        <label for="stock">Stocks</label><br>
        <input type="number" id="stock" required name="stock"><br>
        <label for="price">Price</label><br>
        <input type="number" id="price" required name="price"><br>
        <button type="submit">Create</button>
        <a href="Home.php"><h2 class="button"> Back Home </h2></a>
    </form>
    </div>
</body>
</html>
