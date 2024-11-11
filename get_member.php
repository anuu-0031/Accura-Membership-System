<?php
include 'db_connection.php';

$id = $_GET['id'] ?? 0;
$sql = "SELECT * FROM accura_members WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $id);
$stmt->execute();
$result = $stmt->get_result();
$member = $result->fetch_assoc();

echo json_encode($member);
?>
