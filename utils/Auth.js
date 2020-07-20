const User = require('../models/User');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const { SECRET } = require('../config');

const userRegister = async (userDets, role, res) => {
    try {
        const usernameNotTaken = await validateUsername(userDets.username);
        if (!usernameNotTaken)
            return res.status(400).json({
                message: 'Username is already taken.',
                success: 400,
            });

        const emailNotRegistered = await validateEmail(userDets.email);
        if (!emailNotRegistered)
            return res.status(400).json({
                message: 'Email is already registered.',
                success: 400,
            });

        const hashedPassword = await bcrypt.hash(userDets.password, 12);

        const newUser = new User({
            name: userDets.name,
            email: userDets.email,
            username: userDets.username,
            password: hashedPassword,
            role,
        });

        await newUser.save();

        return res.status(201).json({
            message: 'User is created!',
            success: true,
            newUser,
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Unable to create your account.',
            success: false,
        });
    }
};

const validateUsername = async (username) => {
    const user = await User.findOne({ username });
    return user ? false : true;
};

const validateEmail = async (email) => {
    const user = await User.findOne({ email });
    return user ? false : true;
};

module.exports = { userRegister };
