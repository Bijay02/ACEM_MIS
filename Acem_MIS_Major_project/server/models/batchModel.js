const mongoose = require("mongoose");

const batchSchema = mongoose.Schema({
  batch: {
    type: String,
    required: true,
    unique: true,
  },
});

const Batch = mongoose.model("batchSection", batchSchema);
module.exports = Batch;
