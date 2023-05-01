const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dafrh9x0w",
  api_key: "776315699539537",
  api_secret: "5i667SqcSeiZXvChBL9lmua-Uks",
  secure: true,
});
const Event = require("../models/eventModel");

const getEvents = async (req, res) => {
  const { page } = req.params;
  const perPage = 3;
  const skip = (page - 1) * perPage;
  const count = await Event.find({}).countDocuments();
  await Event.find()
    .skip(skip)
    .limit(perPage)
    .sort({ timestamp: -1 })
    .then((events) => {
      res.status(200).json({ events, count, perPage });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const getprevEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ timestamp: -1 });
    res.status(200).json({ events });
  } catch (err) {
    res.status(400).json(err);
  }
};

const getEventById = async (req, res) => {
  const eventId = req.params.id;
  let event;
  try {
    event = await Event.findById(eventId);
  } catch (err) {
    return console.log(err);
  }
  if (!event) {
    return res.status(404).json({ message: "No Event Found" });
  }
  return res.status(200).json({ event });
};

const createEvent = async (req, res) => {
  const photo = req.files.photo;
  console.log(req.file);
  const { eventName, date, time, venue, description } = req.body;
  let eventExist;
  try {
    eventExist = await Event.findOne({ eventName });
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }

  if (eventExist) {
    return res.status(400).json({ error: "Event already exist" });
  }
  cloudinary.uploader.upload(photo.tempFilePath, async (err, result) => {
    const event = await new Event({
      eventName,
      date,
      time,
      venue,
      description,
      photo: result.url,
    });

    try {
      event.save();
    } catch (err) {
      console.log(err);
    }
    return res.status(201).json({ event });
  });
};

const deleteEvent = async (req, res) => {
  const event = await Event.findByIdAndDelete(req.params.id);
  if (!event) {
    return res.status(404).send("Event not found");
  }
  res.send(event);
};

module.exports = {
  getEvents,
  createEvent,
  deleteEvent,
  getEventById,
  getprevEvents,
};
