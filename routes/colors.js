const express = require('express');
const Color = require('../models/Color');

const router = express.Router();

router.get('/colors', async (req, res) => {
    try {
        const allColors = await Color.find();
        res.json(allColors);
    } catch (error) {
        res.status(500).json({ msg: error });
    }
});

router.post('/colors', (req, res) => {
    const { codeNumber, colorName, base, hexCode } = req.body;

    const newColor = new Color({ codeNumber, colorName, base, hexCode });

    newColor
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ msg: error }));
});

router.get('/colors/:id', async (req, res) => {
    const color = await Color.findById(req.params.id);

    res.send(color);
});

router.patch('/colors/:id', async (req, res) => {
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

        res.json(colorUpdate);
    } catch (error) {
        res.status(500).json({ msg: error });
    }
});

router.delete('/colors/:id', async (req, res) => {
    try {
        const colorRemove = await Color.remove({ _id: req.params.id });
        res.json(colorRemove);
    } catch (error) {
        res.status(500).json({ msg: error });
    }
});

module.exports = router;
