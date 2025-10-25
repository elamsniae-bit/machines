<?php

function mysqli_real_escape_string($db, $string) {
    return SQLite3::escapeString($string);
}

function mysqli_query($db, $query) {
    return $db->query($query);
}

function mysqli_num_rows($result) {
    if (!$result) return 0;
    $count = 0;
    while ($result->fetchArray(SQLITE3_ASSOC)) {
        $count++;
    }
    $result->reset();
    return $count;
}

function mysqli_fetch_assoc($result) {
    if (!$result) return null;
    return $result->fetchArray(SQLITE3_ASSOC);
}

function mysqli_fetch_array($result, $type = SQLITE3_BOTH) {
    if (!$result) return null;
    return $result->fetchArray($type);
}

function mysqli_insert_id($db) {
    return $db->lastInsertRowID();
}

function mysqli_affected_rows($db) {
    return $db->changes();
}

function mysqli_error($db) {
    return $db->lastErrorMsg();
}

?>
