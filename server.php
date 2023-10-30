<?php

$listString = file_get_contents("list.json");
$listArr = json_decode($listString, true);
header("Content-Type: application/json");

echo json_encode($listArr);


