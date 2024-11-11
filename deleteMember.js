function deleteMember(id) {
    if (confirm("Are you sure you want to delete this member?")) {
        $.ajax({
            type: 'POST',
            url: 'delete_member.php',
            data: { id: id },
            success: function(response) {
                const result = JSON.parse(response);
                if (result.success) {
                    alert("Member deleted successfully!");
                    location.reload();
                } else {
                    alert("Failed to delete member.");
                }
            }
        });
    }
}
