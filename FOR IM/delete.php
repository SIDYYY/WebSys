<?php
$conn = pg_connect("host=localhost dbname=Login user=postgres password=Carl");

if(isset($_GET['id'])) {
    $id = pg_escape_string($_GET['id']);
} else {
    echo "No ID provided.";
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['confirm'])) {
    if ($_POST['confirm'] == 'yes') {
        // If confirmed, proceed with deletion
        $query = "DELETE FROM items WHERE id=$id";
        $result = pg_query($conn, $query);

        if ($result) {
            echo "Item deleted successfully.";
            header("Location: home.php"); // Redirect to home.php after successful deletion
            exit();
        } else {
            echo "Error deleting item.";
        }
    } else {
        // If not confirmed, redirect back to home.php without deleting
        header("Location: home.php");
        exit();
    }
}

pg_close($conn);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delete Item</title>
    <link href="form.css" rel="stylesheet">

</head>
<body>
    <h2>Delete Item</h2>
    <p>Are you sure you want to delete this item?</p>
    <form id="deleteForm" action="" method="post">
        <input type="hidden" name="id" value="<?php echo $id; ?>">
        <input type="hidden" name="confirm" value="">
        <button class="button" type="submit" onclick="confirmDelete('yes')">Yes</button>
        <button class="button" type="button" onclick="confirmDelete('no')">No</button>
    </form>

    <script>
        function confirmDelete(choice) {
            document.getElementById("deleteForm").confirm.value = choice;
            document.getElementById("deleteForm").submit();
        }
    </script>
</body>
</html>
