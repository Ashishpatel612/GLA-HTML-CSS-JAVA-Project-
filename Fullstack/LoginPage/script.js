function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let msg = document.getElementById("message");

    if (user === "" || pass === "") {
        msg.textContent = "Please fill all fields!";
        return;
    }

    // Demo correct login
    if (user === "ashish" && pass === "1234") {
        msg.style.color = "green";
        msg.textContent = "Login Successful!";
        // Redirect
        setTimeout(() => {
            window.location.href = "home.html";
        }, 1500);
    } else {
        msg.style.color = "red";
        msg.textContent = "Invalid Username or Password!";
    }
}