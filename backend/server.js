const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend running 🚀");
});

// Contact API
app.post("/contact", (req, res) => {
    const data = req.body;
    console.log("New Contact:", data);

    res.json({ message: "Form received successfully" });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});