const express = require("express");
const {
  createFaculty,
  getFaculty,
  delFaculty,
} = require("../controllers/faculty");
const router = express.Router();

router.get("/faculty", getFaculty);
router.post("/faculty", createFaculty);
router.delete("/faculty/:id", delFaculty);

module.exports = router;
