<?php

    session_start();
    $sitename = 'heavyequip';
    
    $replit_domain = getenv('REPLIT_DEV_DOMAIN');
    if ($replit_domain) {
        $host = "https://" . $replit_domain . "/";
    } else {
        $host = "http://localhost:5000/";
    }
    
    class DBConnection extends SQLite3 {
        public function __construct($path) {
            parent::__construct($path);
        }
        
        public function real_escape_string($string) {
            return $this->escapeString($string);
        }
        
        public function insert_id() {
            return $this->lastInsertRowID();
        }
        
        public function affected_rows() {
            return $this->changes();
        }
        
        public function error() {
            return $this->lastErrorMsg();
        }
    }
    
    $connection = new DBConnection(__DIR__ . '/../heavyequip.db');

    if (!$connection){
        die('connection lost');
    }

    function db_num_rows($result) {
        if (!$result) return 0;
        $count = 0;
        while ($result->fetchArray(SQLITE3_ASSOC)) {
            $count++;
        }
        $result->reset();
        return $count;
    }
    
    function db_fetch_assoc($result) {
        if (!$result) return null;
        return $result->fetchArray(SQLITE3_ASSOC);
    }
    
    function db_fetch_array($result, $type = SQLITE3_BOTH) {
        if (!$result) return null;
        return $result->fetchArray($type);
    }

?>
