const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Unable to create your account.',
            success: false,
        });
    }
};

const userLogin = async (userCreds, role, res) => {
    const { username, password } = userCreds;

    const user = await User.findOne({ username });
    if (!user)
        return res.status(404).json({
            message: 'Username is not found. Invalid login credentials',
            success: false,
        });

    if (user.role !== role)
        return res.status(404).json({
            message: 'Please make sure you are logging from the right portal',
            success: false,
        });

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
        const token = jwt.sign(
            {
                user_id: user.id,
                role: user.role,
                username: user.username,
                email: user.email,
            },
            SECRET,
            { expiresIn: '1 day' }
        );

        const result = {
            username: user.username,
            role: user.role,
            email: user.email,
            token,
            expiresIn: 24,
        };

        res.cookie('token', token, {
            maxAge: 60 * 60 * 1000 * 24,
            httpOnly: true,
            secure: true,
            sameSite: true,
        });
        return res.status(200).json({
            ...result,
            message: 'You are now logged in',
            success: true,
        });
    } else {
        return res.status(404).json({
            message: 'Incorrect Password',
            success: false,
        });
    }
};

const userLogout = async (req, res) => {
    try {
        await res.clearCookie('token');

        return res.status(200).json({
            message: 'Success Logout',
            success: true,
        });
    } catch (error) {
        return res.status(404).json({
            message: 'Invalid Logout',
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

module.exports = {
    userRegister,
    userLogin,
    userLogout,
};
