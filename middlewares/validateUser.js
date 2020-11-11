const Joi = require('joi');

const schemas = {
    loginSchema: Joi.object().keys({
        username: Joi.string().min(5).max(50),
        password: Joi.string().min(8).max(250),
    }),

    registerSchema: Joi.object().keys({
        name: Joi.string().min(3).max(80).required(),
        email: Joi.string()
            .email({ minDomainSegments: 2 })
            .min(4)
            .max(254)
            .required(),
        username: Joi.string().min(5).max(50),
        password: Joi.string().min(8).max(250).required(),
        repeat_password: Joi.ref('password'),
    }),
};

const userValidationMiddleware = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        const { details } = error;
        const message = details.map((i) => i.message).join(',');
        res.status(422).json({ error: message, success: false });
    }
    next();
};

module.exports = { userValidationMiddleware, schemas };
