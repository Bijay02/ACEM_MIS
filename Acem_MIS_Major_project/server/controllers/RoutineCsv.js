const CsvData = require('../models/routineCSVmodel');

const uploadCsv = async (req, res) => {
    try {
        const { data, batch, faculty, section } = req.body;
        // create a new csvData document
        const csvData = new CsvData({ data, batch, faculty, section });
        // save the document to the database
        await csvData.save();
        res.status(200).json({ message: 'CSV data uploaded successfully',csvData });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
}

const getCsvData = async (req, res) => {
    try {
        const { batch, faculty, section } = req.params;
        // Find the documents in the database based on the query parameters
        const csvData = await CsvData.find({ batch, faculty, section });
        res.status(200).json(csvData);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
}

module.exports = {
    uploadCsv,
    getCsvData
}