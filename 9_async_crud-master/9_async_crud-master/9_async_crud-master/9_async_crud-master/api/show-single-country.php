<?php

// Include the database connection file
require_once '../partials/connection.php';

$data = json_decode(file_get_contents('php://input'), true);


if (isset($data['id'])) {
    
    $id = $data['id'];

    
    $query = "SELECT * FROM countries WHERE id = $id";


    $result = mysqli_query($conn, $query);


    $country = mysqli_fetch_assoc($result);


    echo json_encode($country);
}

mysqli_close($conn);

?>
