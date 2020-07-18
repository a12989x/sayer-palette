const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { success, error } = require('consola');

const { PORT, MONGODB_URI } = require('./config');

const colorsRoute = require('./routes/colors');

const app = express();

app.use(express.json());
mongoose.connect(
    MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to MongoDB')
);

app.use('/api', colorsRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
