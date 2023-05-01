const mongoose = require("mongoose");

const feedbackSchema = mongoose.Schema({
  TeacherName: {
    type: String,
  },
  faculty: {
    type: String,
  },
  feedbackMessage: {
    type: String,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  student: {
    type: mongoose.Types.ObjectId,
    ref: "Student",
    required: true,
    strictPopulate: false,
  },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);
module.exports = Feedback;

// Feedback.count({}, function (err, count) {
//   console.log("Number of feedbacks:", count);
// });
