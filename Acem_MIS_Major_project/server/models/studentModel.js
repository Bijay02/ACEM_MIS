const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  cid: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profile: {
    type: String,
    required: true,
  },

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
  location: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  Dob: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  bloodgroup: {
    type: String,
    required: true,
  },
  hometown: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  fathername: {
    type: String,
    required: true,
  },
  mothername: {
    type: String,
    required: true,
  },
  fathercontact: {
    type: String,
    required: true,
  },
  feedbacks: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Feedback",
      required: true,
    },
  ],
});

studentSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

studentSchema.methods.generateAuthToken = () => {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "7d",
  });
  return token;
};

const Student = new mongoose.model("Student", studentSchema);
module.exports = Student;

// Student.count({}, function (err, count) {
//   console.log("Number of students:", count);
// });
