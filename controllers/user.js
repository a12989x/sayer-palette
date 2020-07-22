const User = require('../models/User');
const { userAuth, checkRole, serializeUser } = require('../middlewares/auth');

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        res.status(500).json({
            message: 'Unable to get all users.',
            success: false,
        });
    }
};

const getUser = async (req, res) => {
    try {
        const users = await User.findById(req.params.id);
        res.send(users);
    } catch (error) {
        res.status(500).json({
            message: 'Unable to get the user.',
            success: false,
        });
    }
};

const updateUser = async (req, res) => {
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
};

module.exports = { getUsers, getUser, updateUser };
