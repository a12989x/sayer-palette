const Joi = require('joi');

const loginSchema = Joi.object({
    email: Joi.string().email().min(4).max(100).required(),
    username: Joi.string().min(5).max(50),
    password: Joi.string().min(8).max(50),
});

const registerSchema = Joi.object({
    name: Joi.string().min(3).max(80).required(),
    // email: Joi.string()
    //     .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    //     .min(4)
    //     .max(100)
    //     .required(),
    // username: Joi.string().min(5).max(50),
    // password: Joi.string().min(8).max(150).required(),
    // repeat_password: Joi.ref('password'),
});

const loginValidation = (data) => loginSchema.validateAsync(data, loginSchema);

const registerValidation = async (data) =>
    await registerSchema.validate(data, registerSchema);

module.exports = { loginValidation, registerValidation, registerSchema };
