const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const {
  createResume,
  getResumes,
} = require("../controllers/resumeController");

// Upload Resume
router.post(
  "/",
  protect,
  upload.single("resume"),
  createResume
);

// Get User Resumes
router.get("/", protect, getResumes);

module.exports = router;