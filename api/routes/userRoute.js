const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

router.post('/signup', (req, res) => {
    bcrypt.hash(req.body.password, 10, async (err, hash) => {
        if (err) {
            res.status(500).json({
                error: err
            });
        }
        else {
            try {
                const newUser = new User({
                    name: req.body.name,
                    contact: req.body.contact,
                    password: hash
                });

                const savedUser = await newUser.save();
                res.status(201).json(savedUser);
            } catch (error) {
                res.status(400).json({ error: error.message });
            }
        }
    });
});

router.post('/login', (req, res) => {

    User.find({ contact: req.body.contact })
        .then(user => {
            if (user.length < 1) {
                res.status(401).json({
                    message: 'User does not exist'
                });
            }
            else {
                bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                    if (!result) {
                        res.status(401).json({
                            message: 'Incorrect password'
                        });
                    }
                    if (result) {
                        res.status(200).json({
                            message: 'Login successfull',
                            id: user[0]._id
                        });
                    }
                });
            }
        })
});
module.exports = router;