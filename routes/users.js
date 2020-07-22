const express = require('express');
const router = express.Router();

const { userRegister, userLogin } = require('../utils/Auth.js');
const { userAuth, checkRole, serializeUser } = require('../middlewares/auth');
const {
    userValidationMiddleware,
    schemas,
} = require('../middlewares/validateUser');

const User = require('../models/User');

/* ─────────────────── Register Routes ────────────────── */
router.post(
    '/register-user',
    userValidationMiddleware(schemas.registerSchema),
    async (req, res) => {
        await userRegister(req.body, 'user', res);
    }
);

router.post(
    '/register-admin',
    userValidationMiddleware(schemas.registerSchema),
    async (req, res) => await userRegister(req.body, 'admin', res)
);

router.post(
    '/register-super-admin',
    userValidationMiddleware(schemas.registerSchema),
    async (req, res) => await userRegister(req.body, 'superadmin', res)
);

/* ──────────────────── Login Routes ──────────────────── */
router.post(
    '/login-user',
    userValidationMiddleware(schemas.loginSchema),
    async (req, res) => {
        await userLogin(req.body, 'user', res);
    }
);

router.post(
    '/login-admin',
    userValidationMiddleware(schemas.loginSchema),
    async (req, res) => await userLogin(req.body, 'admin', res)
);

router.post(
    '/login-super-admin',
    userValidationMiddleware(schemas.loginSchema),
    async (req, res) => await userLogin(req.body, 'superadmin', res)
);

/* ───────────────────── Edit Routes ──────────────────── */

router.get('/', userAuth, checkRole(['superadmin']), async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        res.status(500).json({
            message: 'Unable to get all users.',
            success: false,
        });
    }
});

router.get('/:id', userAuth, checkRole(['superadmin']), async (req, res) => {
    try {
        const users = await User.findById(req.params.id);
        res.send(users);
    } catch (error) {
        res.status(500).json({
            message: 'Unable to get the user.',
            success: false,
        });
    }
});

router.patch('/:id', userAuth, checkRole(['superadmin']), async (req, res) => {
    try {
        const { role } = req.body;
        await User.findOneAndUpdate(
            { _id: req.params.id },
            { role },
            { new: true }
        );

        res.status(201).json({
            message: 'User edited successfully.',
            success: true,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Unable to edit user.',
            success: false,
        });
    }
});

module.exports = router;
