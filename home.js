// Modal functionality
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const closeBtns = document.getElementsByClassName('close');

// Open modals
loginBtn.onclick = () => loginModal.style.display = "block";
registerBtn.onclick = () => registerModal.style.display = "block";

// Close modals
Array.from(closeBtns).forEach(btn => {
    btn.onclick = function() {
        loginModal.style.display = "none";
        registerModal.style.display = "none";
    }
});

// Close modal when clicking outside
window.onclick = (event) => {
    if (event.target == loginModal || event.target == registerModal) {
        loginModal.style.display = "none";
        registerModal.style.display = "none";
    }
}

// Sample hospital data
const hospitals = [
    {
        name: "City General Hospital",
        location: "123 Main Street",
        contact: "+1 234-567-8900",
        bloodTypes: ["A+", "B+", "O+", "AB+"]
    },
    {
        name: "Memorial Medical Center",
        location: "456 Park Avenue",
        contact: "+1 234-567-8901",
        bloodTypes: ["A-", "B-", "O-", "AB-"]
    },
    // Add more hospitals as needed
];

// Function to create hospital cards
function createHospitalCards() {
    const container = document.querySelector('.hospitals-container');
    
    hospitals.forEach(hospital => {
        const card = document.createElement('div');
        card.className = 'hospital-card';
        card.innerHTML = `
            <h3>${hospital.name}</h3>
            <p><strong>Location:</strong> ${hospital.location}</p>
            <p><strong>Contact:</strong> ${hospital.contact}</p>
            <p><strong>Blood Types Needed:</strong> ${hospital.bloodTypes.join(', ')}</p>
        `;
        container.appendChild(card);
    });
}

// Call the function when the page loads
window.onload = createHospitalCards;
// ... existing code ...

// Update the createHospitalCards function
function createHospitalCards() {
    const container = document.querySelector('.hospitals-container');
    
    hospitals.forEach(hospital => {
        const card = document.createElement('div');
        card.className = 'hospital-card';
        card.innerHTML = `
            <h3>${hospital.name}</h3>
            <p><strong>Location:</strong> ${hospital.location}</p>
            <p><strong>Contact:</strong> ${hospital.contact}</p>
            <p><strong>Blood Types Needed:</strong> ${hospital.bloodTypes.join(', ')}</p>
            <p class="emergency-status"><strong>Status:</strong> <span class="urgent">Urgent Requirement</span></p>
        `;
        container.appendChild(card);
    });
}

// ... rest of existing code ...