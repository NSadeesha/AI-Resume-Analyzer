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

// Update Resume
exports.updateResume = async (req, res) => {
  try {
    const resume = await Resume.findOneAndUpdate(
      {
        _id: req.params.id,
        userId: req.user.id,
      },
      {
        title: req.body.title,
      },
      {
        new: true,
      }
    );

    if (!resume) {
      return res.status(404).json({
        message: "Resume not found",
      });
    }

    res.status(200).json({
      message: "Resume updated successfully",
      resume,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Resume
exports.deleteResume = async (req, res) => {
  try {
    const resume = await Resume.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id,
    });

    if (!resume) {
      return res.status(404).json({
        message: "Resume not found",
      });
    }

    res.status(200).json({
      message: "Resume deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};