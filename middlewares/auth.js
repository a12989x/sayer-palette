const passport = require('passport');
const jwt = require('jsonwebtoken');

const { SECRET } = require('../config');

const userAuth = passport.authenticate('jwt', { session: false });

const verifyToken = async (req, res, next) => {
    try {
        const token =
            req.cookies.token || req.headers.token.split(' ')[1] || '';
        if (!token)
            return res
                .status(401)
                .json({ message: 'You need to Sign In', success: false });
        const decrypt = await jwt.verify(token, SECRET);
        req.user = { role: decrypt.role };
        next();
    } catch (error) {
        return res.status(500).json({
            message: 'You not logged in, please',
            success: false,
            error: error.toString(),
        });
    }
};

const checkRole = (roles) => (req, res, next) =>
    !roles.includes(req.user.role)
        ? res.status(401).json({ message: 'Unauthorized', success: false })
        : next();

const serializeUser = (user) => {
    return {
        _id: user._id,
        username: user.username,
        email: user.email,
        name: user.name,
        updatedAt: user.updatedAt,
        CreatedAt: user.CreatedAt,
    };
};

module.exports = { userAuth, checkRole, serializeUser, verifyToken };
