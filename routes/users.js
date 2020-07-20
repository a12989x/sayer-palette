const express = require('express');
const router = express.Router();

const { userRegister } = require('../utils/Auth.js');
const userValidationMiddleware = require('../middlewares/validateUser');
const schemas = require('../middlewares/userSchema');

router.post(
    '/register-user',
    userValidationMiddleware(schemas.registerSchema),
    async (req, res) => {
        await userRegister(req.body, 'user', res);
    }
);

module.exports = router;
