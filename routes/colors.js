const express = require('express');
const Color = require('../models/Color');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const allColors = await Color.find();
        res.json(allColors);
    } catch (error) {
        res.status(500).json({ msg: error });
    }
});

router.post('/new', (req, res) => {
    const { codeNumber, colorName, base, hexCode } = req.body;

    const newColor = new Color({ codeNumber, colorName, base, hexCode });

    newColor
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ msg: error }));
});

router.get('/:id', async (req, res) => {
    const color = await Color.findById(req.params.id);

    res.json({ color });
});

router.patch('/:id', async (req, res) => {
    try {
        const colorUpdate = await Color.update(
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
        res.json(colorRemove);
    } catch (error) {
        res.status(500).json({ msg: error });
    }
});

module.exports = router;
