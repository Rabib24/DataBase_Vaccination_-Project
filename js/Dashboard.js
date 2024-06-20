document.addEventListener("DOMContentLoaded", function() {
    showSection('profile');
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
const content = document.getElementById('content');

// Dashboard Section
content.innerHTML += `
<div id="dashboard" class="section">
    <div class="DBHeaderContent">
        <div class="DBhead">
            <h2 class="DashboardHeader">Patient Dashboard</h2>
        </div>

        <div class="info">
            <div class="Column">
                <div class="profileDetailsKey">
                    <div class="UserINfo">Child's Name:</div>
                    <div class="UserDetails">John Doe</div>
                </div>
                <div class="profileDetailsKey">
                    <div class="UserINfo">Gender:</div>
                    <div class="UserDetails"> Male</div>
                </div>
                <div class="profileDetailsKey">
                    <div class="UserINfo">Age:</div>
                    <div class="UserDetails">5</div>
                </div>
                <div class="profileDetailsKey">
                    <div class="UserINfo">Dob:</div>
                    <div class="UserDetails">01/01/2019</div>
                </div>
            </div>
            <div class="line" style="border: 1px solid white;"></div>
            <div class="Column">
                <div class="profileDetailsKey">
                    <div class="UserINfo">Guardian Name:</div>
                    <div class="UserDetails"> Male</div>
                </div>
                <div class="profileDetailsKey">
                    <div class="UserINfo">Contact:</div>
                    <div class="UserDetails">+880 123 456 789</div>
                </div>
                <div class="profileDetailsKey">
                    <div class="UserINfo">Weight:</div>
                    <div class="UserDetails">18kg</div>
                </div>
                <div class="profileDetailsKey">
                    <div class="UserINfo">Blood Group:</div>
                    <div class="UserDetails">O+</div>
                </div>
            </div>
        </div>
    </div>
    <div class="DashBoardAppoinment">
        <h3></h3>
        <div class="DBhead">
            <h2 class="DashboardHeader mt-4 mb-3">Recent/Pending Appointments</h2>
        </div>
        <table id='AppointmentHistoryTable' class="table">
            <thead>
                <tr>
                    <th>Vaccine Name</th>
                    <th>Vaccine Center</th>
                    <th>Appointment Time</th>
                    <th>Other Info</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <!-- Add more rows as needed -->
            </tbody>
        </table>
    </div>

    <div class="DBhead">
        <h2 class="DashboardHeader mt-5">Patient Vaccination Status</h2>
    </div>
    <div class="vaccine-container">
        <div class="vaccine-item">
            <label>
                <input type="checkbox" class="vaccine-checkbox" data-doses="3" data-completed="0"> Hepatitis
                B (HepB)
            </label>
            <span class="dose-status">0/3 Doses</span>
        </div>
        <div class="vaccine-item">
            <label>
                <input type="checkbox" class="vaccine-checkbox" data-doses="5" data-completed="0">
                Diphtheria, Tetanus, Pertussis (DTaP)
            </label>
            <span class="dose-status">0/5 Doses</span>
        </div>
        <div class="vaccine-item">
            <label>
                <input type="checkbox" class="vaccine-checkbox" data-doses="1" data-completed="0"> Tdap
                (Booster)
            </label>
            <span class="dose-status">0/1 Dose</span>
        </div>
        <div class="vaccine-item">
            <label>
                <input type="checkbox" class="vaccine-checkbox" data-doses="3" data-completed="0">
                Haemophilus influenzae type b (Hib)
            </label>
            <span class="dose-status">0/3 Doses</span>
        </div>
        <div class="vaccine-item">
            <label>
                <input type="checkbox" class="vaccine-checkbox" data-doses="4" data-completed="0"> Polio
            </label>
            <span class="dose-status">0/4 Doses</span>
        </div>
        <div class="vaccine-item">
            <label>
                <input type="checkbox" class="vaccine-checkbox" data-doses="4" data-completed="0">
                Pneumococcal Conjugate (PCV)
            </label>
            <span class="dose-status">0/4 Doses</span>
        </div>
        <div class="vaccine-item">
            <label>
                <input type="checkbox" class="vaccine-checkbox" data-doses="2" data-completed="0"> Rotavirus
                (Rotarix)
            </label>
            <span class="dose-status">0/2 Doses</span>
        </div>
        <div class="vaccine-item">
            <label>
                <input type="checkbox" class="vaccine-checkbox" data-doses="3" data-completed="0"> Rotavirus
                (RotaTeq)
            </label>
            <span class="dose-status">0/3 Doses</span>
        </div>
        <div class="vaccine-item">
            <label>
                <input type="checkbox" class="vaccine-checkbox" data-doses="2" data-completed="0"> Measles,
                Mumps, Rubella (MMR)
            </label>
            <span class="dose-status">0/2 Doses</span>
        </div>
        <div class="vaccine-item">
            <label>
                <input type="checkbox" class="vaccine-checkbox" data-doses="2" data-completed="0"> Varicella
                (Chickenpox)
            </label>
            <span class="dose-status">0/2 Doses</span>
        </div>
        <div class="vaccine-item">
            <label>
                <input type="checkbox" class="vaccine-checkbox" data-doses="2" data-completed="0"> Hepatitis
                A (HepA)
            </label>
            <span class="dose-status">0/2 Doses</span>
        </div>
        <div class="vaccine-item">
            <label>
                <input type="checkbox" class="vaccine-checkbox" data-doses="2" data-completed="0"> Human
                Papillomavirus (HPV)
            </label>
            <span class="dose-status">0/2 Doses</span>
        </div>
        <div class="vaccine-item">
            <label>
                <input type="checkbox" class="vaccine-checkbox" data-doses="2" data-completed="0">
                Meningococcal Conjugate (MCV4)
            </label>
            <span class="dose-status">0/2 Doses</span>
        </div>
    </div>
</div>
`;

// Appointment Section
content.innerHTML += `
<div id="appointment" class="section">
    <div class="ApointmentDashboard">
        <div class="appointment-section">
            <div class="appintmentHeader">
                <h2>Appointment History</h2>
                <button id="apply-appointment-btn" class="btnMain w-auto bg-body">Apply for Appointment</button>
            </div>
            <table id='AppointmentHistoryTable' class="table">
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
            <ul id="appointment-history">
                <!-- Appointment history will be appended here -->
            </ul>
        </div>
        <div class="notification-section">
            <h2>Notifications</h2>
            <ul id="notification-list">
                <!-- Notifications will be appended here -->
            </ul>
        </div>
    </div>

    <!-- Modal for Appointment Form -->
    <div id="appointment-modal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Apply for Appointment</h2>
            <form id="appointment-form">
                <div class="userProfile">
                    <div class="UserInfo">
                        <label>Child's Name:</label>
                        <div id="UserName"></div>
                    </div>
                    <div class="UserInfo">
                        <label>Guardian Name:</label>
                        <div id="Parents"></div>
                    </div>
                    <div class="UserInfo">
                        <label>Date Of Birth:</label>
                        <div id="dob"></div>
                    </div>
                    <div class="UserInfo">
                        <label>Contact:</label>
                        <div id="UserContact"></div>
                    </div>
                    <div class="UserInfo">
                        <label>Blood Group:</label>
                        <div id="Blood"></div>
                    </div>
                    <div class="UserInfo">
                        <label>Gender:</label>
                        <div id="Gender"></div>
                    </div>
                    <div class="UserInfo">
                        <label>Age:</label>
                        <div id="Age"></div>
                    </div>
                    <div class="UserInfo">
                        <label>Contact:</label>
                        <div id="UserContact"></div>
                    </div>
                </div>
                <label for="Location">Select Hospital Area:</label>
                <select id="Location" name="HospitalLocation" required>
                    <!-- Hospital options will be populated dynamically -->
                </select>

                <label for="hospitalType">Select Hospital Type:</label>
                <select id="hospitalType" name="HospitalType" required>
                </select>

                <label for="hospital">Select Hospital:</label>
                <select id="hospital" name="hospitalName" required>
                    <!-- Hospital options will be populated dynamically -->
                </select>
                <label for="vaccineSelection">Select Vaccine Name:</label>
                <select id="vaccineSelection" name="vaccine" required>
                    <option value="HepB">HepB (Hepatitis B)</option>
                    <option value="DTapTdap">DTap/Tdap (Diphtheria, tetanus, pertussis)</option>
                    <option value="Hib">Hib (Heemophillus influenzee type b)</option>
                    <option value="Polio">Polio</option>
                    <option value="PCV">PCV (Pneumococcal conjugate)</option>
                    <option value="RV">RV (Rotavirus)</option>
                    <option value="MMR">MMR (Measles, mumps, rubella)</option>
                    <option value="Varicella">Varicella (Chickenpox)</option>
                    <option value="HepA">HepA (Hepatitis A)</option>
                    <option value="HPV">HPV (Human Papillomavirus)</option>
                    <option value="MCV4">MCV4 (Meningococcal Conjugate)</option>
                </select>
    
                <label for="dose-number">Select Dose Number:</label>
                <select id="dose-number" name="doseNumber" required>
                    <option value="1">1st Dose</option>
                    <option value="2">2nd Dose</option>
                    <option value="3">3rd Dose</option>
                    <option value="3">4th Dose</option>
                    <option value="3">3th Dose</option>
                    <option value="booster">Booster</option>
                </select>
                
                <label for="appointment-date">Select Vaccination Date:</label>
                <input type="date" id="appointment-date" name="appointment-date" required>
                <label for="appointment-time">Select the Time slot:</label>
                <input type="time" id="appointment-time" name="appointment-time" required>
                <button class="submitBTN align-content-center" type="submit">Apply for Appointment</button>
            </form>
        </div>
    </div>
    <!-- 
    -->
</div>
 `;


// Profile Section
content.innerHTML += `
    <div id="profile" class="section">
        <h2>Profile Information</h2>
        <div class="info">
        <div class="Column">
            <div class="profileDetailsKey">
                <div class="UserINfo">Child's Name:</div>
                <div class="UserDetails">John Doe</div>
            </div>
            <div class="profileDetailsKey">
                <div class="UserINfo">Gender:</div>
                <div class="UserDetails"> Male</div>
            </div>
            <div class="profileDetailsKey">
                <div class="UserINfo">Age:</div>
                <div class="UserDetails">5</div>
            </div>
            <div class="profileDetailsKey">
                <div class="UserINfo">Dob:</div>
                <div class="UserDetails">01/01/2019</div>
            </div>
        </div>
        <div class="line" style="border: 1px solid white;"></div>
        <div class="Column">
            <div class="profileDetailsKey">
                <div class="UserINfo">Guardian Name:</div>
                <div class="UserDetails"> Male</div>
            </div>
            <div class="profileDetailsKey">
                <div class="UserINfo">Contact:</div>
                <div class="UserDetails">+880 123 456 789</div>
            </div>
            <div class="profileDetailsKey">
                <div class="UserINfo">Weight:</div>
                <div class="UserDetails">18kg</div>
            </div>
            <div class="profileDetailsKey">
                <div class="UserINfo">Blood Group:</div>
                <div class="UserDetails">O+</div>
            </div>
        </div>
    </div>
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
document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('.vaccine-checkbox');

    checkboxes.forEach(checkbox => {
        const totalDoses = parseInt(checkbox.getAttribute('data-doses'));
        const completedDoses = parseInt(checkbox.getAttribute('data-completed'));

        const doseStatus = checkbox.closest('.vaccine-item').querySelector('.dose-status');
        doseStatus.textContent = `${completedDoses}/${totalDoses} Doses`;

        if (completedDoses === totalDoses) {
            checkbox.checked = true;
        }
    });
});

// Appointment JS
document.addEventListener('DOMContentLoaded', () => {
    const paitient = [
        {
            UseR: 'A B C',
            DoB: '24.12.24',
            BlooD: 'O+',
            parent: 'xyz',
            Gender: 'Male',
            Age:'13 Months',
            Contract: '+88090000000' 
        },
    ] 


    paitient.map((info)=>{  
        const paitientName = document.getElementById('UserName');
        paitientName.innerText = info.UseR 

        const paitientDob = document.getElementById('dob');
        paitientDob.innerText = info.DoB

        const paitientblood = document.getElementById('Blood');
        paitientblood.innerText = info.BlooD 

        const paitientGurdian = document.getElementById('Parents');
        paitientGurdian.innerText = info.parent

        const paitientGender = document.getElementById('Gender');
        paitientGender.innerText = info.Gender

        const paitientAge = document.getElementById('Age');
        paitientAge.innerText = info.Age 

        const paitientContact = document.getElementById('UserContact');
        paitientContact.innerText = info.Contract 
        // console.log(paitientName);
    });
    const applyAppointmentBtn = document.getElementById('apply-appointment-btn');
    const modal = document.getElementById('appointment-modal');
    const closeModal = document.getElementsByClassName('close')[0];
    const appointmentForm = document.getElementById('appointment-form');
    const appointmentHistory = document.getElementById('appointment-history');
    const notificationList = document.getElementById('notification-list');

    const TypeHospital = [
        {id: '', name: ''},
        {id: 'Government', name:'Government Hospital',},
        {id: 'Private',name: 'Private Hospital',}
    ]

    const dhakaHospitals = [
        {
          "id": 0,
          "area": "",
          "name": "",
          "type": "",
        },
        {   
         "id": 1,
          "area": "Dhanmondi",
          "name": "City Hospital",
          "type": "Private",
          "address": "34 Panthapath, Dhaka-1205",
          "phone": "+880 2 8859959"
        },
        {
          "id": 2,
          "area": "Shamolly",
          "name": "BIRDEM General Hospital",
          "type": "Government",
          "address": "1 Manik Mia Avenue, Dhaka-1207",
          "phone": "+880 2 9666666"
        },
        {   
         "id": 4,
          "area": "Mirpur",
          "name": "Square Hospital",
          "type": "Private",
          "address": "34 Panthapath, Dhaka-1205",
          "phone": "+880 2 8859959"
        },
        {
          "id": 3,
          "area": "Badda",
          "name": "General Hospital",
          "type": "Government",
          "address": "1 Manik Mia Avenue, Dhaka-1207",
          "phone": "+880 2 9666666"
        },
        {
            "id": 5,
            "area": "Dhanmondi",
            "name": "Baal Hospital",
            "type": "Private",
            "address": "34 Panthapath, Dhaka-1205",
            "phone": "+880 2 8859959"
        }
      ];
      
    const hospitals = [
        { id: 1, name: 'City Hospital' },
        { id: 2, name: 'Evercare Hospital Dhaka, Bashundhara' },
        { id: 3, name: 'Birdem General Hospital & Ibrahim Medical College,' },
        { id: 4, name: 'A Health Center' },
        { id: 5, name: 'B Health Center' },
        { id: 6, name: 'C Health Center' },
        { id: 7, name: 'D Health Center' },
        { id: 8, name: 'E Health Center' },
    ];

    const slots = {
        1: ['10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM'],
        2: ['9:00 AM', '12:00 PM', '1:00 PM', '4:00 PM'],
        3: ['8:00 AM', '10:30 AM', '1:30 PM', '5:00 PM'],
    };

    const H_Type = document.getElementById('hospitalType');
    const Location = document.getElementById('Location');
    const hospitalList = document.getElementById('hospital');

    function AddHospital(SelectedType){
        Selectedlocation = Location.value
        const option = document.createElement('option');
        option.textContent = '';
        hospitalList.appendChild(option);
        // console.log(Selectedlocation);
        dhakaHospitals.forEach(hospital =>{
            if (hospital.area == Selectedlocation){
                if (hospital.type == SelectedType){
                    const option = document.createElement('option');
                    option.value = hospital.name;
                    option.textContent = hospital.name;
                    hospitalList.appendChild(option);
                }
            }
        })
    }
    // Display form data (for demonstration purposes)
    H_Type.addEventListener('change', () => {
        // console.log(`Selected Type: ${H_Type.value}`);
        AddHospital(H_Type.value)
    })
    
    
    TypeHospital.forEach(t => {
        const option = document.createElement('option');
        option.value = t.id;
        option.textContent = t.name;
        H_Type.appendChild(option);        
    });

    const adddedArea = []
    dhakaHospitals.forEach(HArea => {
        let Area = HArea.area
        if (!adddedArea.includes(Area)){
            adddedArea.push(Area)
            const option = document.createElement('option');
            option.value = HArea.area;
            option.textContent = Area;
            Location.appendChild(option);
        }
        
    });



    // Open modal when button is clicked
    applyAppointmentBtn.onclick = function() {
        modal.style.display = "block";
    }



    // Close modal when 'x' is clicked
    saveChange.onclick = function() {
        modal.style.display = "none";
    }

    // Close modal when clicking outside of the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // AppointmentHistoryTable
    function addToHistoryTable(data){
        
        const table = document.getElementById('AppointmentHistoryTable')
        submitData = document.createElement('tbody');
        submitData.innerHTML= `
        <tr>
            <td>${data.Vaccine} (Dose: ${data.Dose_Number})</td>
            <td>${data.Hospital}, ${data.Location}</td>
            <td>${data.Appointment_Date} ${data.Appointment_Time}</td>
            <td>Painding</td>
        </tr>
        `
        table.appendChild(submitData)

        // Add notification for upcoming appointment
        const notification = document.createElement('li');
        notification.textContent = `Upcoming appointment on ${data.Appointment_Date} at ${data.Appointment_Time}`;
        notificationList.appendChild(notification);
        
        // Close modal
        modal.style.display = "none";

        // Reset form
        appointmentForm.reset();

    }
    appointmentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Collect form data
        const formData = new FormData(appointmentForm);

        // Display form data (for demonstration purposes)
        const data = {
            Location: formData.get('HospitalLocation'),
            Hospital: formData.get('hospitalName'),
            Vaccine: formData.get('vaccine'),
            Dose_Number: formData.get('doseNumber'),
            Appointment_Date: formData.get('appointment-date'),
            Appointment_Time: formData.get('appointment-time'),
        }

        addToHistoryTable(data)
        // Submit the form data to the server (placeholder)
        alert('Appointment submitted successfully!');
    });
    // edit profile
    // function editProfile(){
        
    //     profileEditBox.style.display = 'block';
    // };
    editProfile.onclick = function() {
        const profileEditBox = document.getElementById('profileForm')
        profileEditBox.style.display = "block";
    }

    function editPassword(){

    }
});



