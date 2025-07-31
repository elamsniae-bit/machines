<?php


    session_start();
    
    $_SESSION['hello'] = "2";
    
    header("location:./index2.php");

?>