<!DOCTYPE html>
<html lang="en">
<head>
<link href="form.css" rel="stylesheet">

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
</head>
<body>
    <div class="container">
    <div class="header">
    <a class="Add-btn" href="create.php"><button>Add Item</button></a>
    <h2>ITEM LIST</h2>
    </div>
    <?php
    $conn = pg_connect("host=localhost dbname=Login user=postgres password=Carl");

    $query = "SELECT * FROM items";
    $result = pg_query($conn, $query);

    echo "<table>";
    echo "<tr><th>Name</th><th>Description</th><th>Stocks</th><th>Price</th><th>Actions</th></tr>";
    while ($row = pg_fetch_assoc($result)) {
    echo "<tr>";
    echo "<td>".$row['name']."</td>";
    echo "<td>".$row['description']."</td>";
    echo "<td>".$row['stock']."</td>";
    echo "<td>".$row['price']."</td>";
    echo "<td class='actions'><a  href='update.php?id=".$row['id']."'>Update</a> | <a  href='delete.php?id=".$row['id']."'>Delete</a></td>";
    echo "</tr>";
}
echo "</table>";

    pg_close($conn);
    ?>
    <br>
    </div>
</body>
</html>


