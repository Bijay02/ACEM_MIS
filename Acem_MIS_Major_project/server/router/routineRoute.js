const express = require("express");
const {
  createRoutine,
  getRoutine,
  delRoutine,
  getRoutineByDay,
} = require("../controllers/Routine");
const {
  uploadCsv,getCsvData
} = require ("../controllers/RoutineCsv")

const router = express.Router();

router.get("/routine", getRoutine);
router.get("/routinecsv/:batch/:faculty/:section", getCsvData);
router.get("/routine/:batch/:section/:day", getRoutineByDay);
router.post("/routine", createRoutine);
router.post("/routinecsv", uploadCsv);
router.delete("/routine/:id", delRoutine);

module.exports = router;
