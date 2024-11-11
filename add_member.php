<?php
include 'db_connection.php';

$first_name = $_POST['first_name'] ?? '';
$last_name = $_POST['last_name'] ?? '';
$ds_division = $_POST['ds_division'] ?? '';
$date_of_birth = $_POST['date_of_birth'] ?? '';
$summary = $_POST['summary'] ?? '';


if (strtoupper($summary) == 'ACCURA') {
    $last_name .= ' ACCURA';
}

$sql = "INSERT INTO accura_members (first_name, last_name, ds_division, date_of_birth, summary) VALUES (?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssss", $first_name, $last_name, $ds_division, $date_of_birth, $summary,);
$response = $stmt->execute();

echo json_encode(['success' => $response]);

?>
