const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const PORT = 5000;
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/portfolio_db";

// MongoDB Connection
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected ✅"))
  .catch((err) => console.log("MongoDB error:", err));

// Schema
const contactSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    message: String,
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

// Health Route
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// Contact API
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({
      name,
      email,
      message,
    });

    await newContact.save();

    res.json({ message: "Form saved successfully ✅" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
