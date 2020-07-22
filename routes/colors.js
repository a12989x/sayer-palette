const express = require('express');
const router = express.Router();

const { userAuth, checkRole, serializeUser } = require('../middlewares/auth');
const {
    getColors,
    createColor,
    getColor,
    updateColor,
    deleteColor,
} = require('../controllers/color');

router.get(
    '/',
    userAuth,
    checkRole(['user', 'admin', 'superadmin']),
    getColors
);

router.post('/new', userAuth, checkRole(['admin', 'superadmin']), createColor);

router.get(
    '/:id',
    userAuth,
    checkRole(['user', 'admin', 'superadmin']),
    getColor
);

router.patch('/:id', userAuth, checkRole(['admin', 'superadmin']), updateColor);

router.delete(
    '/:id',
    userAuth,
    checkRole(['admin', 'superadmin']),
    deleteColor
);

module.exports = router;
