const express = require('express');
const { connect } = require('mongoose');
const dotenv = require('dotenv');
const passport = require('passport');
const { success, error } = require('consola');

const { PORT, MONGODB_URI } = require('./config');

const colorsRoute = require('./routes/colors');
const usersRoute = require('./routes/users');

const app = express();

app.use(express.json());
app.use(passport.initialize());

require('./middlewares/passport')(passport);

app.use('/api', colorsRoute);
app.use('/api/users', usersRoute);

const startApp = async () => {
    try {
        await connect(MONGODB_URI, {
            useNewUrlParser: true,
            useFindAndModify: true,
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
