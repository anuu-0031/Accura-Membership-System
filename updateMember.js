$('#editMemberForm').submit(function(event) {
    event.preventDefault();
    $.ajax({
        type: 'POST',
        url: 'update_member.php',
        data: $(this).serialize(),
        success: function(response) {
            const result = JSON.parse(response);
            if (result.success) {
                alert("Member updated successfully!");
                location.reload();
            } else {
                alert("Failed to update member.");
            }
        }
    });
});

