const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const AdminSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

AdminSchema.methods.generateAuthToken = () => {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "1h",
  });
  return token;
};

const Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;
