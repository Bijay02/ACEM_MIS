const express = require("express");
const { getBatch, createBatch, delBatch } = require("../controllers/batch");
const router = express.Router();

router.get("/batch", getBatch);
router.post("/batch", createBatch);
router.delete("/batch/:id", delBatch);

module.exports = router;
