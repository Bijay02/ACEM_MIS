const mongoose = require("mongoose");

const facultySchema = mongoose.Schema({
  faculty: {
    type: String,
    required: true,
  },
});

const Faculty = mongoose.model("facultie", facultySchema);
module.exports = Faculty;
