<?php

$listString = file_get_contents("list.json");
$listArr = json_decode($listString, true);

if(isset($_POST["task"])){
  $newTask = $_POST["task"];
  $newitem = [
    "task" => $newTask,
    "done" => false
  ];
  $listArr[] = $newitem;
}
file_put_contents ("list.json", json_encode($listArr));

if(isset($_POST["taskToDelete"])){
  if(isset($listArr[$_POST["taskToDelete"]])){
    array_splice($listArr, $_POST["taskToDelete"], 1);
    file_put_contents("list.json", json_encode($listArr));
  }
}

if(isset($_POST["indexToToggle"])){
  $indexToToggle = $_POST["indexToToggle"];
  $list[$indexToToggle]["done"] = !$list[$indexToToggle]["done"];
  file_put_contents("list.json", json_encode($list));
}


header("Content-Type: application/json");

echo json_encode($listArr);


