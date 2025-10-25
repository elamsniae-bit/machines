<?php

if (!function_exists('db_query')) {
    function db_query($conn, $sql) {
        return $conn->query($sql);
    }
    
    function db_escape($conn, $string) {
        return $conn->real_escape_string($string);
    }
    
    function db_insert_id($conn) {
        return $conn->insert_id();
    }
    
    function db_affected_rows($conn) {
        return $conn->affected_rows();
    }
    
    function db_error($conn) {
        return $conn->error();
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
}

?>
