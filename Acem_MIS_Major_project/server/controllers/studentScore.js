const CsvData = require('../models/studentScoreModel');


const uploadCsv = async (req, res) => {
    try {
        const { data, batch, faculty, section } = req.body;
        // create a new csvData document
        const csvData = new CsvData({ data, batch, faculty, section });
        // save the document to the database
        await csvData.save();
        res.status(200).json({ message: 'CSV data uploaded successfully', csvData });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
}

const getCsvData = async (req, res) => {
    try {
        // Find the documents in the database based on the query parameters
        const csvData = await CsvData.find({});
        res.status(200).json(csvData);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
}

const getStudentScoreByCid = async (req, res) => {
    const { cid } = req.params;
    // const option=name && { name: { $regex: `${name}`, $options: "i" } }
    await CsvData.find({ 'data.cid': cid })
        .then((csvData) => {
            res.status(200).json(csvData);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};

module.exports = {
    uploadCsv,
    getCsvData,
    getStudentScoreByCid
}