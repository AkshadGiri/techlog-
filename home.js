document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const closeBtns = document.getElementsByClassName('close');
  
    if (loginBtn) loginBtn.onclick = () => loginModal.style.display = "block";
    if (registerBtn) registerBtn.onclick = () => registerModal.style.display = "block";
  
    Array.from(closeBtns).forEach(btn => {
        btn.onclick = function() {
            loginModal.style.display = "none";
            registerModal.style.display = "none";
        };
    });
  
    window.onclick = (event) => {
        if (event.target == loginModal || event.target == registerModal) {
            loginModal.style.display = "none";
            registerModal.style.display = "none";
        }
    };
  
    const hospitals = [
        {
            name: "All India Institute of Medical Sciences (AIIMS), Nagpur",
            location: "123 Main Street",
            contact: "+1 234-567-8900",
            bloodTypes: ["A+", "B+", "O+", "AB+"],
            requiredBloodGroup: "A+"
        },
        {
            name: "Government Medical College and Hospital, Nagpur",
            location: "GMC NAGPUR",
            contact: "+1 234-567-8901",
            bloodTypes: ["A-", "B-", "O-", "AB-"],
            requiredBloodGroup: "B-"
        }
    ];
  
    function createHospitalCards() {
        const container = document.querySelector('.hospitals-container');
        if (!container) return;
  
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
  
    window.addEventListener("load", createHospitalCards);
  
    const donors = [
        { name: "Atanu Das", bloodGroup: "A+", location: "New York", lastDonation: "2023-01-15" },
        { name: "Janyy rai", bloodGroup: "B+", location: "Los Angeles", lastDonation: "2023-03-20" },
        { name: "vineeta sharma", bloodGroup: "O+", location: "Chicago", lastDonation: "2023-02-10" },
        { name: "Sara gadhe", bloodGroup: "O-", location: "Houston", lastDonation: "2023-04-01" },
        { name: "pooja chaudhary", bloodGroup: "AB-", location: "Houston", lastDonation: "2023-04-01" },
        { name: "laxmi singh", bloodGroup: "AB+", location: "Houston", lastDonation: "2023-04-01" },
        { name: "anushka raut", bloodGroup: "B-", location: "Houston", lastDonation: "2023-04-01" },
        { name: "salman khurshid", bloodGroup: "A+", location: "Houston", lastDonation: "2023-04-01" },
        { name: "adyan chhipa", bloodGroup: "A-", location: "Houston", lastDonation: "2023-04-01" },
        { name: "pari  patel", bloodGroup: "O-", location: "Houston", lastDonation: "2023-04-01" }
    ];
  
    document.querySelectorAll('.search-box button').forEach((button, index) => {
        button.addEventListener('click', () => {
            const searchInput = button.previousElementSibling.value.trim().toUpperCase();
            if (!searchInput) {
                alert('Please enter a blood group');
                return;
            }
  
            if (index === 0) {
                const matchedDonors = donors.filter(donor => donor.bloodGroup === searchInput);
                displayDonorResults(matchedDonors);
            } else {
                const matchedHospitals = hospitals.filter(hospital => 
                    hospital.bloodTypes.includes(searchInput) || 
                    hospital.location.toLowerCase().includes(searchInput.toLowerCase())
                );
                displayHospitalResults(matchedHospitals);
            }
        });
    });
  
    function displayDonorResults(results) {
        const container = document.createElement('div');
        container.className = 'search-results';
        container.innerHTML = '<h3>Matching Donors:</h3>';
  
        if (results.length === 0) {
            container.innerHTML += '<p>No donors found</p>';
        } else {
            results.forEach(donor => {
                const donorCard = document.createElement('div');
                donorCard.className = 'result-card';
                donorCard.innerHTML = `
                    <h4>${donor.name}</h4>
                    <p>Blood Group: ${donor.bloodGroup}</p>
                    <p>Location: ${donor.location}</p>
                    <p>Last Donation: ${donor.lastDonation}</p>
                `;
                container.appendChild(donorCard);
            });
        }
  
        const existingResults = document.querySelector('.search-results');
        if (existingResults) existingResults.remove();
  
        document.querySelector('.search-section').appendChild(container);
    }
  });