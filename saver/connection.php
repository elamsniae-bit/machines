<?php

    session_start();
    $sitename = 'heavyequip';
    $host = "http://localhost/ment/";
    $connection = mysqli_connect('localhost','root','','qsgigqid_heavyequip');

    if (!$connection){
        die('connection lost');
    }



?>


