const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./api/routes/userRoute');
const app = express();

mongoose.connect('mongodb://localhost:27017/RentmyHome', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to database');
    })
    .catch(() => {
        console.log('Connection failed');
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', userRoutes);

app.use('/', (req, res) => {
    res.status(404).send('URL not found');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
