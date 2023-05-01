const Student = require("../models/studentModel");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dafrh9x0w",
  api_key: "776315699539537",
  api_secret: "5i667SqcSeiZXvChBL9lmua-Uks",
  secure: true,
});

const getStudent = async (req, res) => {
  await Student.findById(req.params.id)
    .then((student) => {
      res.status(200).json(student);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const searchStudent = async (req, res) => {
  const { name } = req.params;
  // const option=name && { name: { $regex: `${name}`, $options: "i" } }
  await Student.find({ name: { $regex: `${name}`, $options: "i" } })
    .then((student) => {
      res.status(200).json(student);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const getStudentById = async (req, res) => {
  let student;
  try {
    student = await Student.findById(req.params.id);
  } catch (err) {
    return console.log(err);
  }
  if (!student) {
    return res.status(404).json({ message: "No Student Found" });
  }
  return res.status(200).json([student]);
};

const getStudentByBatchAndSection = async (req, res) => {
  const perPage = 12;
  const { batch, faculty, section, page } = req.params;
  const skip = (page - 1) * perPage;
  const count = await Student.find({
    batch: batch,
    section: section,
    faculty: faculty,
  }).countDocuments();
  await Student.find({ batch: batch, section: section, faculty: faculty })
    .skip(skip)
    .limit(perPage)
    .sort({ name: "asc" })

    .then((student) => {
      res.status(200).json({ student, count, perPage });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const getStudents = async (req, res) => {
  const count = await Student.find({}).countDocuments();
  await Student.find()
    .then((students) => {
      res.status(200).json({ students, count });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const createStudent = async (req, res) => {
  const profile = req.files.profile;

  console.log(req.file);
  const {
    name,
    cid,
    email,
    batch,
    faculty,
    section,
    location,
    gender,
    Dob,
    height,
    weight,
    bloodgroup,
    hometown,
    contact,
    fathername,
    mothername,
    fathercontact,
  } = req.body;

  let emailExist;
  try {
    emailExist = await Student.findOne({ email });
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
  let cidExist;
  try {
    cidExist = await Student.findOne({ cid });
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
  if (cidExist) {
    return res.status(400).json({ error: "CId already exist" });
  }
  if (emailExist) {
    return res.status(400).json({ error: "Email already exist" });
  }
  cloudinary.uploader.upload(profile.tempFilePath, async (err, result) => {
    const student = await new Student({
      name,
      cid,
      email,
      profile: result.url,
      batch,
      faculty,
      section,
      location,
      gender,
      Dob,
      height,
      weight,
      bloodgroup,
      hometown,
      contact,
      fathername,
      mothername,
      fathercontact,
      feedbacks: [],
    });

    try {
      student.save();
    } catch (err) {
      console.log(err);
    }
    return res.status(201).json({ student });
  });
};

const updateStudent = async (req, res) => {
  const {
    name,
    cid,
    email,
    batch,
    faculty,
    section,
    location,
    gender,
    Dob,
    height,
    weight,
    bloodgroup,
    hometown,
    contact,
    fathername,
    mothername,
    fathercontact,
  } = req.body;

  const student = await Student.findByIdAndUpdate(
    req.params.id,
    {
      name,
      cid,
      email,
      batch,
      faculty,
      section,
      location,
      gender,
      Dob,
      height,
      weight,
      bloodgroup,
      hometown,
      contact,
      fathername,
      mothername,
      fathercontact,
    },
    { new: true }
  );
  try {
    student.save();
  } catch (err) {
    console.log(err);
  }
  return res.status(201).json({ student });
};

const deleteStudent = async (req, res) => {
  const student = await Student.findByIdAndDelete(req.params.id);
  if (!student) {
    return res.status(404).send("Student not found");
  }
  res.send(student);
};

module.exports = {
  getStudents,
  getStudent,
  createStudent,
  deleteStudent,
  getStudentByBatchAndSection,
  getStudentById,
  updateStudent,
  searchStudent,
};
