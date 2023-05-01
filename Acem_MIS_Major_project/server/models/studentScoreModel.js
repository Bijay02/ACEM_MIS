const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentScoreSchema = new Schema({
  batch: {
    type: String,
    required: true,
  },
  faculty: {
    type: String,
    required: true,

  },
  section: {
    type: String,
    required: true,

  },
  data: [
    {
      type: Array,
      required: true,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const studentScoreData = mongoose.model("studentScoreData", studentScoreSchema);
module.exports = studentScoreData;
