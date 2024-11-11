<?php
// Database connection settings
$host = 'localhost';         
$db_name = 'php_dev_anusha';  
$username = 'root';          
$password = '';              

// Create a new MySQLi connection
$conn = new mysqli($host, $username, $password, $db_name);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>

