function login() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    // ✅ Validation
    if (username === "" || password === "") {
        alert("Please enter username and password");
        return;
    }

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    })
    .then(res => res.text())
    .then(data => {
        if (data === "Login successful") {
            alert("Login successful");
            window.location.href = "index.html"; // homepage
        } else {
            alert("Invalid credentials");
        }
    })
    .catch(err => {
        console.log(err);
        alert("Server error");
    });
}