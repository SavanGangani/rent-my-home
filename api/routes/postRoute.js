const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.post('/add', (req, res) => {
    const post = new Post({
        name: req.body.name,
        contact: req.body.contact,
        address: req.body.address,
        city: req.body.city,
        area: req.body.area,
        pincode: req.body.pincode,
        housetype: req.body.housetype,
        bedroom: req.body.bedroom,
        bathroom: req.body.bathroom,
        parking: req.body.parking,
        garden: req.body.garden,
        rent: req.body.rent,
        title: req.body.title,
        description: req.body.description
    });
    post.save()
        .then(result => {
            res.status(200).json({
                message: 'Post created successfully',
                // result: result
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
});

router.get('/allpost', (req, res) => {
    Post.find()
        .then(posts => {
            res.status(200).json({
                posts: posts
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
});

router.get('/post/:housetype', (req, res) => {
    Post.find({ housetype: req.params.housetype })
        .then(post => {
            res.status(200).json({
                post: post
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
});

router.delete('/delete/:id', (req, res) => {
    Post.deleteOne({ _id: req.params.id })
        .then(result => {
            res.status(200).json({
                message: 'Post deleted successfully',
                // result: result
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
});

module.exports = router;