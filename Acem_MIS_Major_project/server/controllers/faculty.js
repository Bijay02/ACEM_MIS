const Faculty = require("../models/facultyModel");

const createFaculty = async (req, res) => {
  try {
    const faculty = new Faculty(req.body);
    await faculty.save();
    res.status(201).send({ faculty });
  } catch (error) {
    res.status(400).send(error);
  }
};

const getFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.find({});
    res.send(faculty);
  } catch (error) {
    res.status(400).send(error);
  }
};

const delFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.findByIdAndDelete(req.params.id);
    if (!faculty) {
      return res.status(404).send("Faculty not found");
    }
    res.send(faculty);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createFaculty,
  getFaculty,
  delFaculty,
};
