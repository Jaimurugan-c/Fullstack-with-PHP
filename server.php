<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$filename = "data.json";

// Handle POST request to add a task
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $task = $_POST["task"];
    $tasks = json_decode(file_get_contents($filename), true) ?? [];
    $tasks[] = $task;
    file_put_contents($filename, json_encode($tasks));
    echo "Task added successfully!";
    exit;
}

// Handle GET request to retrieve tasks
if ($_SERVER["REQUEST_METHOD"] === "GET") {
    echo file_get_contents($filename);
    exit;
}
?>
