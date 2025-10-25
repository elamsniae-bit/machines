<?php

    session_start();
    $sitename = 'heavyequip';
    
    $replit_domain = getenv('REPLIT_DEV_DOMAIN');
    if ($replit_domain) {
        $host = "https://" . $replit_domain . "/";
    } else {
        $host = "http://localhost:5000/";
    }
    
    $connection = new SQLite3(__DIR__ . '/../heavyequip.db');

    if (!$connection){
        die('connection lost');
    }

    require_once __DIR__ . '/db_helpers.php';

?>
