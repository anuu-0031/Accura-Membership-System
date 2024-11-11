<?php
include 'db_connection.php';

$search = $_GET['search'] ?? '';
$sql = "SELECT * FROM accura_members WHERE last_name LIKE ?";
$stmt = $conn->prepare($sql);
$search_param = "%$search%";
$stmt->bind_param("s", $search_param);
$stmt->execute();
$result = $stmt->get_result();
$members = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($members);
?>
