const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.post('/add', (req, res) => {
    const post = new Post({
        uId: req.body.uId,
        name: req.body.name,
        contact: req.body.contact,
        time: req.body.time,
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
                status: 'success',
                message: 'Post created successfully',
                result: result
            });

        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
            console.log(err);
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

router.get('/user/:uId', (req, res) => {
    Post.find({ uId: req.params.uId })
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

router.get('/area/:area', (req, res) => {
    Post.find({ area: req.params.area })
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

// router.get('/post/', async (req, res) => {
//     try {
//         const { city, area, houseType } = req.query;
//         const filter = {};
//         if (city) {
//             filter.city = city;
//         }
//         if (area) {
//             filter.area = area;
//         }
//         if (houseType) {
//             filter.housetype = houseType;
//         }

//         const data = await Post.find(filter);
//         res.json(data);
//     } catch (err) {
//         res.status(500).json({
//             error: err
//         });
//     }
// });




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