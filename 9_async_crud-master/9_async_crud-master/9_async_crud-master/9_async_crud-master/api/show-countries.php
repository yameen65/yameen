<?php

// Include the database connection file
require_once '../partials/connection.php';
$query = "SELECT * FROM countries ORDER BY id DESC";


$result = mysqli_query($conn, $query);


$countries = [];


while ($row = mysqli_fetch_assoc($result)) {
    $countries[] = $row;
}


echo json_encode($countries);

mysqli_close($conn);

?>
