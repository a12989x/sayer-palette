const express = require('express');
const Color = require('../models/Color');

const router = express.Router();

const { userAuth, checkRole, serializeUser } = require('../middlewares/auth');

router.get('/', async (req, res) => {
    try {
        const allColors = await Color.find();
        res.json(allColors);
    } catch (error) {
        res.status(500).json({ msg: error });
    }
});

router.post('/new', async (req, res) => {
    try {
        const { codeNumber, colorName, base, hexCode } = req.body;

        const newColor = await new Color({
            codeNumber,
            colorName,
            base,
            hexCode,
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
});

router.get('/:id', async (req, res) => {
    const color = await Color.findById(req.params.id);

    res.send(color);
});

router.patch('/:id', async (req, res) => {
    try {
        await Color.updateOne(
            { _id: req.params.id },
            {
                $set: {
                    codeNumber: req.body.codeNumber,
                    colorName: req.body.colorName,
                    hexCode: req.body.hexCode,
                    base: req.body.base,
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
});

router.delete('/:id', async (req, res) => {
    try {
        const colorRemove = await Color.remove({ _id: req.params.id });
        res.json({ message: 'Color removed successfully.', success: true });
    } catch (error) {
        res.status(500).json({
            message: 'Unable to delete the color.',
            success: false,
        });
    }
});

module.exports = router;
