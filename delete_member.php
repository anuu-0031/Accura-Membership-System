<?php
include 'db_connection.php';

$id = $_POST['id'] ?? 0;

$sql = "DELETE FROM accura_members WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $id);
$response = $stmt->execute();

echo json_encode(['success' => $response]);

?>

