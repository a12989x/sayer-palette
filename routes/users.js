const express = require('express');
const router = express.Router();

const { userRegister } = require('../utils/Auth.js');

router.post('/register-user', async (req, res) => {
    await userRegister(req.body, 'user', res);
});

module.exports = router;
