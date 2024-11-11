$(document).ready(function() {
    // Fetch and display members
    function loadMembers(search = '') {
        $.ajax({
            url: 'list_members.php',
            type: 'GET',
            data: { search: search },
            success: function(response) {
                const members = JSON.parse(response);
                let memberHTML = '';
                members.forEach(member => {
                    memberHTML += `
                        <tr>
                            <td>${member.first_name}</td>
                            <td>${member.last_name}</td>
                            <td>${member.ds_division}</td>
                            <td>${member.date_of_birth}</td>
                            <td>${member.summary}</td>
                            <td>
                                <button class="btn btn-info btn-sm edit-btn" data-id="${member.id}">Edit</button>
                                <button class="btn btn-danger btn-sm delete-btn" data-id="${member.id}">Delete</button>
                            </td>
                        </tr>
                    `;
                });
                $('#memberList').html(memberHTML);
            }
        });
    }

    // Initial Load
    loadMembers();

    // Search Members by Last Name
    $('#searchInput').on('keyup', function() {
        const searchValue = $(this).val();
        loadMembers(searchValue);
    });

    // Add Member Form Submission
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

    // Delete Member
    $(document).on('click', '.delete-btn', function() {
        const id = $(this).data('id');
        if (confirm("Are you sure you want to delete this member?")) {
            $.ajax({
                type: 'POST',
                url: 'delete_member.php',
                data: { id: id },
                success: function(response) {
                    const result = JSON.parse(response);
                    if (result.success) {
                        alert("Member deleted successfully!");
                        loadMembers();
                    } else {
                        alert("Failed to delete member.");
                    }
                }
            });
        }
    });

    // Reset Button Functionality
    $('#resetButton').click(function() {
        $('#addMemberForm')[0].reset();
        $('#memberId').val('');  // Clear hidden member ID field
    });

// Edit Button Click - Load Member Data into Form
$(document).on('click', '.edit-btn', function() {
    const memberId = $(this).data('id');
    $.ajax({
        type: 'GET',
        url: 'get_member.php',
        data: { id: memberId },
        success: function(response) {
            const member = JSON.parse(response);
            $('#memberId').val(member.id);
            $('#firstName').val(member.first_name);
            $('#lastName').val(member.last_name);
            $('#dsDivision').val(member.ds_division);
            $('#summary').val(member.summary);
            $('#dateOfBirth').val(member.date_of_birth);
            $('#addMemberModal').modal('show');
            $('#addButton').hide();
            $('#updateButton').show();
        }
    });
});

// Update Member Form Submission
$('#updateButton').click(function(event) {
    event.preventDefault();
    const memberId = $('#memberId').val();
    $.ajax({
        type: 'POST',
        url: 'update_member.php',
        data: $('#addMemberForm').serialize(),
        success: function(response) {
            const result = JSON.parse(response);
            if (result.success) {
                alert("Member updated successfully!");
                $('#addMemberModal').modal('hide');
                loadMembers();
            } else {
                alert("Failed to update member.");
            }
        }
    });
});

});
