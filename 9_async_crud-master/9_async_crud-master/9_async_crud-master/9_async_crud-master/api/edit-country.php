<?php
require_once '../partials/connection.php';

$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['submit'])) {
    
    $name = htmlspecialchars($data['name']);
    $capital = htmlspecialchars($data['capital']);
    $language = htmlspecialchars($data['language']);
    $currency = htmlspecialchars($data['currency']);
    $continent = htmlspecialchars($data['continent']);

    
    if (empty($name)) {
        exit(json_encode(['nameError' => 'Provide name from PHP!']));
    } elseif (empty($capital)) {
        exit(json_encode(['capitalError' => 'Provide capital from PHP!']));
    } elseif (empty($language)) {
        exit(json_encode(['languageError' => 'Provide language from PHP!']));
    } elseif (empty($currency)) {
        exit(json_encode(['currencyError' => 'Provide currency from PHP!']));
    } elseif (empty($continent)) {
        exit(json_encode(['continentError' => 'Provide continent from PHP!']));
    } else {
        
        $stmt = $conn->prepare("SELECT * FROM `countries` WHERE 1");
        $stmt->bind_param("s", $name);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows === 0) {
        
            $stmt = $conn->prepare("UPDATE `countries` SET `name`= '$name',`capital`= '$capital',`language`= '$language',`currency`= '$currency',`continent`= '$continent' WHERE `id` = '$id'");

            $stmt->bind_param("sssss", $name, $capital, $language, $currency, $continent);

            if ($stmt->execute()) {
                exit(json_encode(['success' => 'Magic has been spelled!']));
            } else {
                exit(json_encode(['failure' => 'Magic has failed to spell!']));
            }
        } else {
            exit(json_encode(['nameError' => 'Country already exists!']));
        }
    }
}