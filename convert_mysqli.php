<?php

function convert_file($filepath) {
    $content = file_get_contents($filepath);
    
    $replacements = [
        'mysqli_query($connection,' => '$connection->query(',
        'mysqli_real_escape_string($connection,' => '$connection->real_escape_string(',
        'mysqli_insert_id($connection)' => '$connection->insert_id()',
        'mysqli_affected_rows($connection)' => '$connection->affected_rows()',
        'mysqli_error($connection)' => '$connection->error()',
        'mysqli_num_rows(' => 'db_num_rows(',
        'mysqli_fetch_assoc(' => 'db_fetch_assoc(',
        'mysqli_fetch_array(' => 'db_fetch_array(',
    ];
    
    foreach ($replacements as $search => $replace) {
        $content = str_replace($search, $replace, $content);
    }
    
    file_put_contents($filepath, $content);
    echo "Converted: $filepath\n";
}

$files = [
    'admin/add/index.php',
    'admin/add2/index.php',
    'admin/approve/index.php',
    'admin/auth/index.php',
    'admin/categories/index.php',
    'admin/home/index.php',
    'admin/products/index.php',
    'app/dashboard/index.php',
    'components/admin/box.php',
    'components/nav.php',
    'process.php',
    'products.php',
    'saver/admin/authorization.php',
    'saver/user/login.php',
    'saver/user/register.php',
];

foreach ($files as $file) {
    if (file_exists($file)) {
        convert_file($file);
    }
}

echo "Conversion complete!\n";

?>
