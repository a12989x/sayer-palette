const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ColorSchema = new Schema(
    {
        codeNumber: {
            type: String,
            required: true,
            min: 12,
            max: 12,
            unique: true,
        },
        colorName: {
            type: String,
            required: true,
            min: 1,
            maxLength: 100,
            unique: true,
        },
        hexCode: { type: String, required: true, min: 7, max: 7, unique: true },
        base: [],
    },
    { validateBeforeSave: true }
);

module.exports = mongoose.model('Color', ColorSchema);
