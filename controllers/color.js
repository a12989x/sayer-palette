const Color = require('../models/Color');

const getColors = async (req, res) => {
    try {
        const allColors = await Color.find();
        res.json(allColors);
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

const createColor = async (req, res) => {
    try {
        const { codeNumber, colorName, base, hexCode } = req.body;

        const lowerCodeNumber = codeNumber
            .replace(/\s+|-|\//g, '')
            .toLowerCase();
        const lowerColorName = colorName.replace(/\s/g, '').toLowerCase();
        const lowerHexCode = hexCode.toLowerCase();

        const codeNumberNotTaken = await validateCodeNumber(lowerCodeNumber);
        if (!codeNumberNotTaken)
            return res.status(400).json({
                message: 'Code Number is already taken.',
                success: 400,
            });

        const colorNameNotTaken = await validateColorName(lowerColorName);
        if (!colorNameNotTaken)
            return res.status(400).json({
                message: 'Color Name is already taken.',
                success: 400,
            });

        const hexCodeNotTaken = await validateHexCode(lowerHexCode);
        if (!hexCodeNotTaken)
            return res.status(400).json({
                message: 'Color Name is already taken.',
                success: 400,
            });

        const newColor = await new Color({
            codeNumber: lowerCodeNumber,
            colorName: lowerColorName,
            hexCode: lowerHexCode,
            base,
        });

        await newColor.save();
        res.status(201).json({
            message: 'New color created.',
            success: true,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Unable to create your color.',
            success: false,
        });
    }
};

const getColor = async (req, res) => {
    const value = req.params.value;
    const formatValue = value.replace(/\s+|-|\//g, '').toLowerCase();
    const checkValue = /^[a-zA-Z]+$/.test(formatValue);

    if (checkValue) {
        const color = await Color.findOne({ colorName: formatValue });
        if (color !== null) res.send(color);
        else
            res.status(401).json({
                message: 'Unable to find color.',
                success: false,
            });
    } else {
        const color = await Color.findOne({ codeNumber: formatValue });
        if (color !== null) res.send(color);
        else
            res.status(401).json({
                message: 'Unable to find color.',
                success: false,
            });
    }
};

const updateColor = async (req, res) => {
    try {
        const { codeNumber, colorName, base, hexCode } = req.body;

        await Color.updateOne(
            { _id: req.params.id },
            {
                $set: {
                    codeNumber,
                    colorName,
                    hexCode,
                    base,
                },
            }
        );

        res.status(201).json({
            message: 'Edited successfully.',
            success: true,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Unable to create your new color.',
            success: false,
        });
    }
};

const deleteColor = async (req, res) => {
    try {
        const colorRemove = await Color.remove({ _id: req.params.id });
        res.json({ message: 'Color removed successfully.', success: true });
    } catch (error) {
        res.status(500).json({
            message: 'Unable to delete the color.',
            success: false,
        });
    }
};

const validateCodeNumber = async (codeNumber) => {
    const color = await Color.findOne({ codeNumber });
    return color ? false : true;
};

const validateColorName = async (colorName) => {
    const color = await Color.findOne({ colorName });
    return color ? false : true;
};

const validateHexCode = async (hexCode) => {
    const color = await Color.findOne({ hexCode });
    return color ? false : true;
};

module.exports = { getColors, createColor, getColor, updateColor, deleteColor };
