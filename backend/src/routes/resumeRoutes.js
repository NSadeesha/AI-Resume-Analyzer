const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const {
  createResume,
  getResumes,
  updateResume,
  deleteResume,
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

// Update Resume
router.put("/:id", protect, updateResume);

// Delete Resume
router.delete("/:id", protect, deleteResume);

module.exports = router;