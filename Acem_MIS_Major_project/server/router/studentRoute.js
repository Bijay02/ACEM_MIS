const express = require("express");
const {
  getStudents,
  getStudent,
  createStudent,
  deleteStudent,
  getStudentById,
  updateStudent,
  searchStudent,
  getStudentByBatchAndSection,
} = require("../controllers/student");
const {
  uploadCsv, getCsvData, getStudentScoreByCid
} = require("../controllers/studentScore")
const router = express.Router();

router.get("/students", getStudents);
router.get("/student/:batch/:faculty/:section/:id", getStudentById);
router.get(
  "/students/:batch/:faculty/:section/:page",
  getStudentByBatchAndSection
);
router.get("/searchStudent/:name", searchStudent);
router.get("/students/:id", getStudent);
router.get("/studentcsv/:batch/:faculty/:section", getCsvData);
router.get("/studentcsv/:cid", getStudentScoreByCid);
router.post("/student", createStudent);
router.post("/studentcsv", uploadCsv);
router.put("/student/:id", updateStudent);
router.delete("/student/:id", deleteStudent);

module.exports = router;
