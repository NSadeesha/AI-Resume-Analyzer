const Resume = require("../models/Resume");

// Create Resume
exports.createResume = async (req, res) => {
  try {
    const resume = await Resume.create({
      userId: req.user.id,
      title: req.body.title,
      fileUrl: req.file.path,
      originalFileName: req.file.originalname,
    });

    res.status(201).json({
      message: "Resume uploaded successfully",
      resume,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Resumes
exports.getResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({
      userId: req.user.id,
    });

    res.status(200).json(resumes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};