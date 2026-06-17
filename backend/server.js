require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const connectDB = require("./src/config/db");
const userRoutes = require("./src/routes/userRoutes");
const resumeRoutes = require("./src/routes/resumeRoutes");

// Connect Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve Uploaded Files
app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"))
);

// Routes
app.use("/api/users", userRoutes);
app.use("/api/resumes", resumeRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "AI Resume Analyzer API Running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});