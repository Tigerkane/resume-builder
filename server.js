const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

/* ================= ROUTING ================= */

// ✅ FIRST: Always show login page at root
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "login.html"));
});

// ✅ THEN: serve all frontend files
app.use(express.static(__dirname));


/* ================= DATABASE ================= */

mongoose.connect("mongodb://127.0.0.1:27017/resumeDB")
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));


/* ================= USER ================= */

const User = mongoose.model("User", {
    username: String,
    email: String,
    password: String
});

// Register API
app.post("/register", async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.send("User registered successfully");
    } catch (err) {
        res.send("Error registering user");
    }
});

// Login API
app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username, password });

    if (user) {
        res.send("Login successful");
    } else {
        res.send("Invalid credentials");
    }
});


/* ================= RESUME ================= */

const Resume = mongoose.model("Resume", {
    name: String,
    email: String,
    phone: String,
    skills: String,
    education: String,
    experience: String
});

// Save Resume
app.post("/save", async (req, res) => {
    try {
        const data = new Resume(req.body);
        await data.save();
        res.send("Saved to DB");
    } catch (err) {
        res.send("Error saving data");
    }
});


/* ================= SERVER ================= */

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});