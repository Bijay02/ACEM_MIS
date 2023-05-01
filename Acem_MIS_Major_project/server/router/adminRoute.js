const express = require("express");
const {
  createAdmin,
  getAdmins,
  loginAdmin,
  delAdmins,
} = require("../controllers/Adminlogin");
const router = express.Router();

router.get("/admins", getAdmins);
router.post("/admin", createAdmin);
router.post("/admin/login", loginAdmin);
router.delete("/admin/:id", delAdmins);

module.exports = router;
