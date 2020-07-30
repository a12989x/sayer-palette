const express = require('express');
const { connect } = require('mongoose');
const passport = require('passport');
const { success, error } = require('consola');
const jwt = require('express-jwt');
const cookieParser = require('cookie-parser');

const { PORT, MONGODB_URI, SECRET } = require('./config');

const colorsRoute = require('./routes/colors');
const usersRoute = require('./routes/users');

const app = express();

app.use(express.json());
app.use(passport.initialize());
app.use(cookieParser());

require('./middlewares/passport')(passport);

app.use('/api/colors', colorsRoute);
app.use('/api/users', usersRoute);

app.use(
    jwt({
        secret: SECRET,
        algorithms: ['HS256'],
        getToken: (req) => req.cookies.token,
    })
);

const startApp = async () => {
    try {
        await connect(MONGODB_URI, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
            useCreateIndex: true,
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
