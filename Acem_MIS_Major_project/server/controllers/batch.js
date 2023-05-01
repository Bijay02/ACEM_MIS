const Batch = require("../models/batchModel");

const getBatch = async (req, res) => {
  await Batch.find()
    .then((batches) => {
      res.status(200).json(batches);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const createBatch = async (req, res) => {
  const { batch } = req.body;

  const exist = await Batch.findOne({ batch });

  if (!exist) {
    await Batch.create({ batch });
    return res
      .status(201)
      .json({ message: "Batch has been created successfully!" });
  } else {
    return res
      .status(400)
      .json({ errors: [{ msg: `${batch} batch is already exist` }] });
  }
};

const delBatch = async (req, res) => {
  const batch = await Batch.findByIdAndDelete(req.params.id);
  if (!batch) {
    return res.status(404).json({ message: "Batch  not found" });
  }
  res.status(200).json({ message: "Batch has been deleted successfully" });
};

module.exports = { getBatch, createBatch, delBatch };
