function submitForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Basic password validation
    if (password !== confirmPassword) {
        document.getElementById("result").innerHTML = "Passwords do not match.";
        return;
    }

    // Perform registration logic (you would typically send this data to a server)

    // For demonstration purposes, just display the result
    document.getElementById("result").innerHTML = "Registration successful!<br>" +
        "Username: " + username + "<br>" +
        "Email: " + email;
}

