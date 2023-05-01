const express = require("express");
const {
  getFeedbacks,
  createFeedback,
  deleteFeedback,
  getByUserId,
  getFeedbackById,
} = require("../controllers/feedback");
const router = express.Router();

router.get("/feedbacks/:page", getFeedbacks);
router.post("/feedback", createFeedback);
router.delete("/feedback/:id", deleteFeedback);
router.get("/feedback/:id", getFeedbackById);
router.get("/studentfeedback/:id", getByUserId);

module.exports = router;
