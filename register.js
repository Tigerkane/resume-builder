function register() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, email, password })
    })
    .then(res => res.text())
    .then(data => {
        alert(data);
        window.location.href = "login.html";
    })
    .catch(err => {
        console.log(err);
        alert("Error occurred");
    });
}