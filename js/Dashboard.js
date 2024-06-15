document.addEventListener("DOMContentLoaded", function() {
    showSection('dashboard');
});

function showSection(section) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.classList.remove('active'));

    const activeSection = document.getElementById(section);
    if (activeSection) {
        activeSection.classList.add('active');
    }
}

// // Add the sections dynamically
// const content = document.getElementById('content');

// // Dashboard Section
// content.innerHTML += `
//     <div id="dashboard" class="section">
//         <div class="header">
//             <h2 class="DashboardHeader">Patient Dashboard</h2>
//             <div class="info">
//                 div
//                 <div>Child's Name: John Doe</div>
//                 <div>Age: 5</div>
//                 <div>Gender: Male</div>
//                 <div>DOB: 01/01/2019</div>
//                 <div>Current Weight: 18kg</div>
//                 <div>Guardian Name: Jane Doe</div>
//             </div>
//         </div>
//         <h3>Recent/Pending Appointments</h3>
//         <table class="table">
//             <thead>
//                 <tr>
//                     <th>Vaccine Name</th>
//                     <th>Vaccine Center</th>
//                     <th>Appointment Time</th>
//                     <th>Other Info</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>Hepatitis B</td>
//                     <td>City Health Center</td>
//                     <td>12/12/2024 10:00 AM</td>
//                     <td>---</td>
//                 </tr>
//                 <!-- Add more rows as needed -->
//             </tbody>
//         </table>
//     </div>
// `;

// Appointment Section
content.innerHTML += `
    <div id="appointment" class="section">
        <h2>Appointment History</h2>
        <table class="table">
            <thead>
                <tr>
                    <th>Vaccine Name</th>
                    <th>Vaccine Center</th>
                    <th>Appointment Time</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Polio</td>
                    <td>City Health Center</td>
                    <td>10/10/2023 09:00 AM</td>
                    <td>Completed</td>
                </tr>
                <!-- Add more rows as needed -->
            </tbody>
        </table>
    </div>
`;

// Profile Section
content.innerHTML += `
    <div id="profile" class="section">
        <h2>Profile Information</h2>
        <form id="profileForm">
            <label for="childName">Child's Name:</label>
            <input type="text" id="childName" name="childName" value="John Doe"><br><br>
            <label for="age">Age:</label>
            <input type="text" id="age" name="age" value="5"><br><br>
            <label for="gender">Gender:</label>
            <input type="text" id="gender" name="gender" value="Male"><br><br>
            <label for="dob">DOB:</label>
            <input type="date" id="dob" name="dob" value="2019-01-01"><br><br>
            <label for="weight">Current Weight:</label>
            <input type="text" id="weight" name="weight" value="18kg"><br><br>
            <label for="guardianName">Guardian Name:</label>
            <input type="text" id="guardianName" name="guardianName" value="Jane Doe"><br><br>
            <button type="button" class="button">Save Changes</button>
        </form>
        <br>
        <button class="button">Change Password</button>
    </div>
`;

// Logout Section
content.innerHTML += `
    <div id="logout" class="section">
        <h2>Logout</h2>
        <p>Do you want to log out now?</p>
        <button class="button" onclick="confirmLogout(true)">Yes</button>
        <button class="button" onclick="confirmLogout(false)">No</button>
    </div>
`;

function confirmLogout(logout) {
    if (logout) {
        // Add logout functionality here
        alert('Logging out...');
    } else {
        showSection('dashboard');
    }
}
