const express = require('express');
const router = express.Router();

const {
    userAuth,
    checkRole,
    serializeUser,
    verifyToken,
} = require('../middlewares/auth');
const {
    getColors,
    createColor,
    getColor,
    updateColor,
    deleteColor,
} = require('../controllers/color');

router.get(
    '/',
    verifyToken,
    checkRole(['user', 'admin', 'superadmin']),
    getColors
);

router.post(
    '/new',
    verifyToken,
    checkRole(['admin', 'superadmin']),
    createColor
);

router.get(
    '/:id',
    verifyToken,
    checkRole(['user', 'admin', 'superadmin']),
    getColor
);

router.patch(
    '/:id',
    verifyToken,
    checkRole(['admin', 'superadmin']),
    updateColor
);

router.delete(
    '/:id',
    verifyToken,
    checkRole(['admin', 'superadmin']),
    deleteColor
);

module.exports = router;
