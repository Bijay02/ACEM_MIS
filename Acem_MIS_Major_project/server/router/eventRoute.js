const express = require("express");
const {
  getEvents,
  createEvent,
  deleteEvent,
  getEventById,
  getprevEvents,
} = require("../controllers/event");
const router = express.Router();

router.get("/events/:page", getEvents);
router.get("/prevEvents", getprevEvents);
router.post("/event", createEvent);
router.get("/event/:id", getEventById);
router.delete("/event/:id", deleteEvent);

module.exports = router;
