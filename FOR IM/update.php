<?php
$conn = pg_connect("host=localhost dbname=Login user=postgres password=Carl");

if(isset($_GET['id'])) {
    $id = pg_escape_string($_GET['id']);

    // Fetch the item details from the database
    $query = "SELECT * FROM items WHERE id=$id";
    $result = pg_query($conn, $query);

    if ($result && pg_num_rows($result) > 0) {
        $row = pg_fetch_assoc($result);
        $name = $row['name'];
        $description = $row['description'];
        $price = $row['price'];
    } else {
        echo "Item not found.";
        exit();
    }
} else {
    echo "No ID provided.";
    exit();
}


// Handle form submission for updating the item
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $newName = pg_escape_string($_POST['name']);
    $newDescription = pg_escape_string($_POST['description']);
    $newStock = pg_escape_string($_POST['stock']);
    $newPrice = pg_escape_string($_POST['price']);

    // Update the item in the database
    $query = "UPDATE items SET name='$newName', description='$newDescription', stock='$newStock' ,price='$newPrice' WHERE id=$id";
    $result = pg_query($conn, $query);

    if ($result) {
        // Redirect to home.php after successful update
        header("Location: home.php");
        exit();
    } else {
        // PHP code to generate JavaScript popup message
        $message = "Cant be updated!";
        echo "<script>alert('$message');</script>";

    }
}

pg_close($conn);
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Update Item</title>
    <link href="form.css" rel="stylesheet">

</head>
<body>
    <div class="container">
    <h2>UPDATE ITEM</h2>
    <form action="" method="post">
        <input type="hidden" name="id" value="<?php echo $id; ?>">
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name" value="<?php echo $name; ?>"><br>
        <label for="description">Description:</label><br>
        <textarea id="description" name="description"><?php echo $description; ?></textarea><br>
        <label for="stock">Stock:</label><br>
        <input type="number" id="stock" name="stock" value="<?php echo $stock; ?>"><br>
        <label for="price">Price:</label><br>
        <input type="number" id="price" name="price" value="<?php echo $price; ?>"><br>
        <button type="submit">Update</button>
        <a href="Home.php"><h2 class="button"> Back Home </h2></a>
    </form>
    </div>
</body>
</html>
