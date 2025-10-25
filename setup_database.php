<?php

$db = new SQLite3('heavyequip.db');

$db->exec('PRAGMA foreign_keys = ON;');

echo "Creating tables...\n";

$db->exec('DROP TABLE IF EXISTS history');
$db->exec('DROP TABLE IF EXISTS products');
$db->exec('DROP TABLE IF EXISTS client');
$db->exec('DROP TABLE IF EXISTS categories');
$db->exec('DROP TABLE IF EXISTS admin');

$db->exec('
CREATE TABLE admin (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);
');

$db->exec("
INSERT INTO admin (id, username, email, password) VALUES
(1, 'kingsley sepiri ', 'kingsleysepiri@gmail.com', '1234'),
(2, 'admin', 'Wp1457087@gmail.com', 'ESHINANDU..@');
");

$db->exec('
CREATE TABLE categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(255) NOT NULL
);
');

$db->exec("
INSERT INTO categories (id, name) VALUES
(8, ' Excavators'),
(11, 'Backhoe Loaders'),
(12, 'Dump Trucks '),
(13, 'Crane Trucks'),
(14, 'Graders'),
(15, 'Compactors'),
(16, 'Forklifts '),
(17, 'Wheel Loaders'),
(21, 'Bulldozers'),
(22, 'Skid-Steer Loaders'),
(23, 'Chainsaw');
");

$db->exec('
CREATE TABLE client (
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  phone VARCHAR(255) NOT NULL
);
');

$db->exec("
INSERT INTO client (name, email, password, id, phone) VALUES
('kingsley', 'arumkingsley@gmail.com', '1234', 2, '07089611318'),
('kingsley', 'broifeco@gmail.com', '1234', 3, '07089611318'),
('Kingsley ', 'arumkingsley49@gmail.com', '1234', 4, '09017862743'),
('Hello', 'Hello@gmail.com', '1234', 5, '2256'),
('m8icheak', 'arumkingsley849@gmail.com', 'mm', 6, '07089611318');
");

$db->exec('
CREATE TABLE history (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  product_id VARCHAR(255) NOT NULL,
  status VARCHAR(255) NOT NULL,
  quality VARCHAR(255) NOT NULL,
  rec_name VARCHAR(255) NOT NULL,
  rec_email VARCHAR(255) NOT NULL,
  rec_phone VARCHAR(255) NOT NULL,
  rec_address VARCHAR(255) NOT NULL,
  postal VARCHAR(255) NOT NULL,
  user VARCHAR(255) NOT NULL,
  date VARCHAR(255) NOT NULL
);
');

$db->exec("
INSERT INTO history (id, product_id, status, quality, rec_name, rec_email, rec_phone, rec_address, postal, user, date) VALUES
(3, '7', 'declined', '1', 'sepiri', 'kingsleysepiri@gmail.com', '07089611318', 'enugu nigeria', '128885', '2', '2024-12-25'),
(4, '6', 'approved', '1', 'hello', 'arumkingsley49@gmail.com', '07089611318', '12345', '1234567', '4', '2025-01-09');
");

$db->exec('
CREATE TABLE products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  price VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  brand VARCHAR(255) NOT NULL,
  categorie VARCHAR(255) NOT NULL,
  model VARCHAR(255) NOT NULL,
  productcondition VARCHAR(255) NOT NULL,
  year VARCHAR(255) NOT NULL,
  image VARCHAR(255) NOT NULL,
  des VARCHAR(255) NOT NULL,
  weight VARCHAR(255) NOT NULL
);
');

echo "Database setup completed successfully!\n";
echo "Database file: heavyequip.db\n";

$db->close();
?>
