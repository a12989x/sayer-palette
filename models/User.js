const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        name: { type: String, required: true, min: 3, max: 80, unique: true },
        email: {
            type: String,
            required: true,
            min: 4,
            max: 254,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
            unique: true,
        },
        username: {
            type: String,
            required: true,
            min: 5,
            max: 50,
            unique: true,
        },
        password: { type: String, required: true, min: 8, max: 250 },
        role: {
            type: String,
            default: 'user',
            enum: ['user', 'admin', 'superadmin'],
        },
    },
    { timestamps: true }
);

module.exports = model('users', UserSchema);
