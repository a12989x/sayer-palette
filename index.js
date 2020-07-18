const express = require('express');
const { connect } = require('mongoose');
const dotenv = require('dotenv');
const { success, error } = require('consola');

const { PORT, MONGODB_URI } = require('./config');

const colorsRoute = require('./routes/colors');

const app = express();

app.use(express.json());

app.use('/api', colorsRoute);

const startApp = async () => {
    try {
        await connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        success({ message: 'Connected to MongoDB', badge: true });
        app.listen(PORT, () =>
            success({ message: `Server running on port ${PORT}`, badge: true })
        );
    } catch (err) {
        error({ message: 'Unable to connect to MongoDB', badges: true });
    }
};

startApp();
