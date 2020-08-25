const express = require('express');
const router = express.Router();

const { userRegister, userLogin } = require('../utils/Auth.js');
const {
    getUsers,
    getUser,
    updateUser,
    deleteUser,
} = require('../controllers/user');
const {
    userAuth,
    checkRole,
    serializeUser,
    verifyToken,
} = require('../middlewares/auth');
const {
    userValidationMiddleware,
    schemas,
} = require('../middlewares/validateUser');

const User = require('../models/User');

/* ─────────────────── Register Routes ────────────────── */
router.post(
    '/register',
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
    '/login',
    userValidationMiddleware(schemas.loginSchema),
    async (req, res) => {
        const user = await User.findOne({ username: req.body.username });
        userLogin(req.body, user.role, res);
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

router.get('/', verifyToken, checkRole(['superadmin']), getUsers);

router.get('/:id', verifyToken, checkRole(['superadmin']), getUser);

router.patch('/:id', verifyToken, checkRole(['superadmin']), updateUser);

router.delete('/:id', verifyToken, checkRole(['superadmin']), deleteUser);

module.exports = router;
