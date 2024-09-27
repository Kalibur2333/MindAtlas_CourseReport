<?php
// CORS headers to allow access from different origins
header('Access-Control-Allow-Origin: *');  // Allow requests from any origin
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');  // Allow specific methods
header('Access-Control-Allow-Headers: Content-Type');  // Allow Content-Type header
header('Content-Type: application/json');
include 'db.php';

// SQL Query to fetch enrollments data
$query = "
    SELECT 
        Users.first_name, 
        Users.last_name, 
        Courses.description AS course_name, 
        Status.status_description AS completion_status
    FROM 
        Enrolments
    JOIN 
        Users ON Enrolments.user_id = Users.user_id
    JOIN 
        Courses ON Enrolments.course_id = Courses.course_id
    JOIN 
        Status ON Enrolments.status_id = Status.status_id
";

// Prepare and execute the query
$stmt = $pdo->prepare($query);
$stmt->execute();

// Fetch the results as an associative array
$enrollments = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Return the data as a JSON response
echo json_encode($enrollments);
?>


