// Function for Signup Logic
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // 1. Validation
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // 2. Data Structure
        const userData = {
            name: name,
            email: email,
            password: password
        };

        // 3. Save to LocalStorage and SessionStorage
        localStorage.setItem('userAccount', JSON.stringify(userData));
        sessionStorage.setItem('activeUser', JSON.stringify(userData));

        // 4. Alert and Redirect
        alert(`Thank you, ${name}! Your account has been created.`);
        window.location.href = 'login.html';
    });
}

// Function for Login Logic
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;

        // 1. Retrieve Data from LocalStorage
        const savedData = JSON.parse(localStorage.getItem('userAccount'));

        // 2. Check Match
        if (savedData && savedData.email === email && savedData.password === password) {
            alert("Welcome back!");

            // 3. Update storage
            localStorage.setItem('lastLogin', new Date().toLocaleString());
            sessionStorage.setItem('isLoggedIn', 'true');

            // Redirect to a dashboard or home (yahan hum index par wapas bhej rahe hain)
            window.location.href = 'index.html';
        } else {
            // 4. Error Message
            alert("Invalid email or password");
        }
    });
}