const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ColorSchema = new Schema(
    {
        codeNumber: { type: String, required: true, min: 12, max: 12 },
        colorName: { type: String, required: true, min: 1, max: 100 },
        hexCode: { type: String, required: true, min: 7, max: 7 },
        base: [],
    },
    { validateBeforeSave: true }
);

module.exports = mongoose.model('Color', ColorSchema);
