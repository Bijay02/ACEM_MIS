const Admin = require("../models/adminModel");
const { hashedPassword, comparePassword } = require("../services/authService");

const createAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const exist = await Admin.findOne({ email });
    if (!exist) {
      const hashed = await hashedPassword(password);
      const admin = await Admin.create({
        email,
        password: hashed,
      });
      return res
        .status(201)
        .json({ message: "Admin has created successfully!", admin });
    } else {
      return res
        .status(400)
        .json({ errors: [{ msg: `${email} is already exist` }] });
    }
  } catch (err) {
    console.log(err);
  }
};

const getAdmins = async (req, res) => {
  await Admin.find()
    .then((admins) => {
      res.status(200).json(admins);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const delAdmins = async (req, res) => {
  await Admin.findByIdAndDelete(req.params.id)

    .then((admins) => {
      res.status(200).json(admins);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email });
    if (admin) {
      if (await comparePassword(password, admin.password)) {
        const token = admin.generateAuthToken();
        return res.status(200).json({ email, token });
      } else {
        return res
          .status(400)
          .json({ errors: [{ msg: "Password is incorrect" }] });
      }
    } else {
      return res
        .status(400)
        .json({ errors: [{ msg: `${email} is not exist` }] });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createAdmin, getAdmins, loginAdmin, delAdmins };
