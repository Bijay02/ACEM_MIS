const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const User = new mongoose.Schema({
  name: {
    type: String,
    unique: false,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  faculty: {
    type: String,
  },
  location: {
    type: String,
  },
  section: {
    type: String,
  },
  batch: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: false,
  },
  image: {
    data: Buffer,
    contentType: String,
  },

  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});
// User.methods.generateAuthToken = async function () {
//   try {
//     let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
//     this.tokens = this.tokens.concat({token:token});
//     await this.save();
//     return token;
//   } catch (err) {
//     console.log(err);
//   }
// };
User.methods.generateAuthToken = () => {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "7d",
  });
  return token;
};

const model = mongoose.model("75BCTA", User);

module.exports = model;
