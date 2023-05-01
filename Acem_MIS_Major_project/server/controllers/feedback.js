const Feedback = require("../models/feedbackModel");
const Student = require("../models/studentModel");
const mongoose = require("mongoose");

const getFeedbacks = async (req, res) => {
  const { page } = req.params;
  const perPage = 6;
  const skip = (page - 1) * perPage;
  const count = await Feedback.find({}).countDocuments();
  let feedbacks;
  try {
    feedbacks = await Feedback.find()
      .populate({
        path: "student",
        select: "name batch section faculty profile",
      })
      .skip(skip)
      .limit(perPage)
      .sort({ timestamp: -1 });
  } catch (err) {
    return console.log(err);
  }
  if (!feedbacks) {
    return res.status(404).json({ message: "No Feedbacks Found" });
  }
  return res.status(200).json({ feedbacks, perPage, count });
};

const getFeedbackById = async (req, res) => {
  const feedbackId = req.params.id;
  let feedback;
  try {
    feedback = await Feedback.findById(feedbackId).populate({
      path: "student",
      select: "name batch section faculty profile",
    });
  } catch (err) {
    return console.log(err);
  }
  if (!feedback) {
    return res.status(404).json({ message: "No Feedback Found" });
  }
  return res.status(200).json({ feedback });
};

const createFeedback = async (req, res) => {
  const { TeacherName, faculty, feedbackMessage, student } = req.body;

  let existingUser;
  try {
    existingUser = await Student.findById(student);
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return res
      .status(400)
      .json({ message: "Unable To Find Student By This ID" });
  }

  const feedback = new Feedback({
    TeacherName,
    faculty,
    feedbackMessage,
    student,
  });
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await feedback.save({ session });
    existingUser.feedbacks.push(feedback);
    await existingUser.save({ session });
    await session.commitTransaction();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }

  return res.status(200).json({ feedback });
};

const deleteFeedback = async (req, res) => {
  const id = req.params.id;

  let feedback;
  try {
    feedback = await Feedback.findByIdAndRemove(id).populate("student");
    await feedback.student.feedbacks.pull(feedback);
    await feedback.student.save();
  } catch (err) {
    console.log(err);
  }
  if (!feedback) {
    return res.status(500).json({ message: "Unable To Delete" });
  }
  return res.status(200).json({ message: "Successfully Delete" });
};

const getByUserId = async (req, res) => {
  const studentId = req.params.id;
  let studentFeedbacks;
  try {
    studentFeedbacks = await Student.findById(studentId).populate("feedbacks");
  } catch (err) {
    return console.log(err);
  }
  if (!studentFeedbacks) {
    return res.status(404).json({ message: "No Feedback Found" });
  }
  return res.status(200).json({ student: studentFeedbacks });
};

module.exports = {
  getFeedbacks,
  createFeedback,
  deleteFeedback,
  getByUserId,
  getFeedbackById,
};
