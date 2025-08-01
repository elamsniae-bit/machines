<?php

    session_start();
    $sitename = 'heavyequip';
    $host = "localhost";
    $connection = mysqli_connect('localhost','root','','qsgigqid_heavyequip');

    if (!$connection){
        die('connection lost');
    }



?>


