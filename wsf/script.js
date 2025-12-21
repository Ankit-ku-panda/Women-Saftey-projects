// Login Function
function login() {
    // Get input values
    const email = document.getElementById('login_email').value.trim();
    const password = document.getElementById('login_pass').value.trim();

    // Basic validation
    if(email === "" || password === "") {
        alert("Please enter both email and password.");
        return;
    }

    // For demo: simple login check (replace with backend API)
    if(email === "user@example.com" && password === "123456") {
        alert("Login successful!");
        // Redirect to dashboard or home page
        // window.location.href = "dashboard.html";
    } else {
        alert("Invalid email or password.");
    }
}

// Register Function
function register() {
    // Get input values
    const name = document.getElementById('reg_name').value.trim();
    const email = document.getElementById('reg_email').value.trim();
    const phone = document.getElementById('reg_phone').value.trim();
    const password = document.getElementById('reg_pass').value.trim();

    // Basic validation
    if(name === "" || email === "" || phone === "" || password === "") {
        alert("Please fill all fields.");
        return;
    }

    // Simple email format check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Simple phone number check
    const phonePattern = /^[0-9]{10}$/;
    if(!phone.match(phonePattern)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    // For demo: just show success message
    alert("Registration successful!\nName: " + name + "\nEmail: " + email);

    // Clear form
    document.getElementById('reg_name').value = "";
    document.getElementById('reg_email').value = "";
    document.getElementById('reg_phone').value = "";
    document.getElementById('reg_pass').value = "";
}
