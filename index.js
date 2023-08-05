const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const userRoutes = require('./api/routes/userRoute');
const postRoutes = require('./api/routes/postRoute');

const app = express();

mongoose.connect('mongodb+srv://RentMyHome:RentMyHome@cluster0.k048sbq.mongodb.net/RentMyHome?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to database');
    })
    .catch(() => {
        console.log('Connection failed');
    });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', userRoutes);
app.use('/', postRoutes);

app.use('/', (req, res) => {
    res.status(404).send('Welcome to RentMyHome');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
