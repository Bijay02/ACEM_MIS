const Routine = require("../models/routineModel");

const createRoutine = async (req, res) => {
  try {
    const routine = new Routine(req.body);
    await routine.save();
    res.status(201).send({ routine });
  } catch (error) {
    res.status(400).send(error);
  }
};

const getRoutine = async (req, res) => {
  try {
    const routine = await Routine.find({});
    res.send(routine);
  } catch (error) {
    res.send(error);
  }
};

const getRoutineByDay = async (req, res) => {
  const { batch, section, day } = req.params;
  try {
    const timetable = await Routine.find({ batch, section, day });
    res.status(200).json({ timetable });
  } catch (error) {
    res.status(400).send(error);
  }
};

const delRoutine = async (req, res) => {
  try {
    const routine = await Routine.findByIdAndDelete(req.params.id);
    if (!routine) {
      return res.status(404).send("Routine not found");
    }
    res.send(routine);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createRoutine,
  getRoutine,
  delRoutine,
  getRoutineByDay,
};
