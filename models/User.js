const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        name: { type: String, required: true, min: 3, max: 80 },
        email: { type: String, required: true, min: 4, max: 100 },
        username: { type: String, required: true, min: 5, max: 50 },
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
