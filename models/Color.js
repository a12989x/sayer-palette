const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ColorSchema = new Schema(
    {
        codeNumber: { type: String, required: true },
        colorName: { type: String, required: true },
        hexCode: { type: String, required: true },
        base: [],
    },
    { validateBeforeSave: true }
);

module.exports = mongoose.model('Color', ColorSchema);
