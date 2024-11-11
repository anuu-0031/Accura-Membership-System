$('#addMemberForm').submit(function(event) {
    event.preventDefault();
    $.ajax({
        type: 'POST',
        url: 'add_member.php',
        data: $(this).serialize(),
        success: function(response) {
            const result = JSON.parse(response);
            if (result.success) {
                alert("Member added successfully!");
                $('#addMemberModal').modal('hide');
                loadMembers();
            } else {
                alert("Failed to add member.");
            }
        }
    });
});
