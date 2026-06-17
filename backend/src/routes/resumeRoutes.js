const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createResume,
  getResumes,
} = require("../controllers/resumeController");

router.post("/", protect, createResume);
router.get("/", protect, getResumes);

module.exports = router;