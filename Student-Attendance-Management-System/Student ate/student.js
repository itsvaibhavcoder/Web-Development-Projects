
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form1');
    const tbody = document.getElementById('tbody');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Get form values
      const name = document.getElementById('name').value;
      const subject = document.getElementById('subject').value;
      const rollNo = document.getElementById('rollNo').value;
  
      // Create a new table row
      const newRow = document.createElement('tr');
  
      // Add student information to the table row
      newRow.innerHTML = `
        <td>${name}</td>
        <td>${subject}</td>
        <td>${rollNo}</td>
        <td class="td6">
          <button class="present-btn btn btn-success">Present</button>
          <button class="absent-btn btn btn-danger">Absent</button>
        </td>
      `;
  
      // Append the new row to the table body
      tbody.appendChild(newRow);
  
      // Reset the form fields after submission
      form.reset();
    });
  
    // Handling attendance button click events (delegated event handling)
    tbody.addEventListener('click', function(event) {
      const target = event.target;
  
      // Check if the clicked element is a button inside the table body
      if (target.matches('.present-btn')) {
        // Handle present button click
        markAttendance(target, 'Present');
      } else if (target.matches('.absent-btn')) {
        // Handle absent button click
        markAttendance(target, 'Absent');
      }
    });
  
    // Function to update attendance status
    function markAttendance(button, status) {
      const row = button.closest('tr'); // Find the parent row of the clicked button
  
      // Update the cell with attendance status
      const attendanceCell = row.querySelector('.td6');
      attendanceCell.innerHTML = status;
    }
  });
  
