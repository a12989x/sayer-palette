const passport = require('passport');

const userAuth = passport.authenticate('jwt', { session: false });

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

module.exports = { userAuth, checkRole, serializeUser };
