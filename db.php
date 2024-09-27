<?php
// Database connection configuration
$host = 'localhost';        // MySQL host 
$dbname = 'course_report';   // database name
$username = 'root';          //  MySQL username 
$password = '';              // MySQL password

try {
    // PDO connection string
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);

    // Set PDO error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Optional: Uncomment below to check if the connection is successful
    // echo "Database connection successful!";
    
} catch (PDOException $e) {
    // Handle any connection errors
    die("Database connection failed: " . $e->getMessage());
}
?>
