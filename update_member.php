<?php
include 'db_connection.php';

$id = $_POST['id'] ?? 0;
$first_name = $_POST['first_name'] ?? '';
$last_name = $_POST['last_name'] ?? '';
$ds_division = $_POST['ds_division'] ?? '';
$date_of_birth = $_POST['date_of_birth'] ?? '';
$summary = $_POST['summary'] ?? '';

if (strtoupper($summary) == 'ACCURA') {
    $last_name .= ' ACCURA';
}

$sql = "UPDATE accura_members SET first_name = ?, last_name = ?, ds_division = ?, date_of_birth = ?, summary = ? WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssssi", $first_name, $last_name, $ds_division, $date_of_birth, $summary, $id);
$response = $stmt->execute();

echo json_encode(['success' => $response]);

?>

