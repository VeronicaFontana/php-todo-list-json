<?php

$listString = file_get_contents("list.json");
$listArr = json_decode($listString, true);

if(isset($_POST["task"])){
  $newTask = $_POST["task"];
  $listArr[] = $newTask;
}
file_put_contents ("list.json", json_encode($listArr));

header("Content-Type: application/json");

echo json_encode($listArr);


