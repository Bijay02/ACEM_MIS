const mongoose = require("mongoose");

const routineSchema = mongoose.Schema({
  batch: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  faculty: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  routine: [
    {
      starttime: {
        type: String,
        required: true,
      },
      endtime: {
        type: String,
        required: true,
      },
      subject: {
        type: String,
        required: true,
      },
      teacherName: {
        type: String,
        required: true,
      },
    },
  ],
});

const Routine = mongoose.model("Routine", routineSchema);
module.exports = Routine;
