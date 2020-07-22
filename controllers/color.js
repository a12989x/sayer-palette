const Color = require('../models/Color');
const { userAuth, checkRole, serializeUser } = require('../middlewares/auth');

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

        const codeNumberNotTaken = await validateCodeNumber(codeNumber);
        if (!codeNumberNotTaken)
            return res.status(400).json({
                message: 'Code Number is already taken.',
                success: 400,
            });

        const colorNameNotTaken = await validateColorName(colorName);
        if (!colorNameNotTaken)
            return res.status(400).json({
                message: 'Color Name is already taken.',
                success: 400,
            });

        const hexCodeNotTaken = await validateHexCode(hexCode);
        if (!hexCodeNotTaken)
            return res.status(400).json({
                message: 'Color Name is already taken.',
                success: 400,
            });

        const newColor = await new Color({
            codeNumber,
            colorName,
            hexCode,
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
    const color = await Color.findById(req.params.id);
    res.send(color);
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
