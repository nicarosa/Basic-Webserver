require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT;

const userRoute = require('./routes/User');

app.use('/user', userRoute);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});