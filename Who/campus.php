<?php

$campus = $_POST['select'];

switch($campus){
    case "5":
        header("Location: camboriu.php");
        exit();
}