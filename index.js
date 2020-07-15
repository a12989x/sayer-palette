const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const colorsRoute = require('./routes/colors');

const app = express();
dotenv.config();

app.use(express.json());
mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to MongoDB')
);

app.use('/', colorsRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
