const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

router.post('/signup', (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            res.status(500).json({
                error: err
            });
        }
        else {
            const user = new User({
                name: req.body.name,
                email: req.body.email,
                password: hash
            });
            user.save()
                .then(result => {
                    res.status(200).json({
                        message: 'User created successfully',
                        result: result
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        error: err
                    });
                });
        }
    });
});

router.post('/login', (req, res) => {
    User.find({ email: req.body.email })
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