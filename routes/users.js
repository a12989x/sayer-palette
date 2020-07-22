const express = require('express');
const router = express.Router();

const { userRegister, userLogin } = require('../utils/Auth.js');
const { getUsers, getUser, updateUser } = require('../controllers/user');
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

router.get('/', userAuth, checkRole(['superadmin']), getUsers);

router.get('/:id', userAuth, checkRole(['superadmin']), getUser);

router.patch('/:id', userAuth, checkRole(['superadmin']), updateUser);

module.exports = router;
