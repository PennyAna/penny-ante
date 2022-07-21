var express = require('express');
var router = express.Router();
module.exports = router;
const sequenceGenerator = require('./sequenceGenerator');
const User = require('../models/user');

//GET1
router.get('/:id', (req, res, next) => {
    const query = {'id': req.params.id};
    User.findOne(query)
    .then(user => {
        res.status(200).json({
            message: 'User Fetch', 
            user: user
        });
    })
    .catch(error => {
        res.status(500).json({
            message: 'An error occurred', 
            error: error
        });
    });
});

//GETOMNES
router.get('/', (req, res, next) => {
    User.find()
    .then(users => {
        res.status(200).json({
            message: 'Users fetched successfully!', 
            user: users
        });
    })
    .catch(error => {
        res.status(500).json({
            message: 'An error occurred', 
            error: error
        });
    });
});

//POST
router.post('/',(req, res, next) => {
    const maxUserId = sequenceGenerator.nextId("user");
    const user = new User({
        id:  maxUserId, 
        name: req.body.name, 
    });
    user.save()
    .then(createdUser => {
        res.status(201).json({
            message: 'User added successfully', 
            user: createdUser
        });
    })
    .catch(error => {
        res.status(500).json({
            message: 'An error occurred', 
            error: error
        });
    });
});
//PUT
router.put('/:id', (req, res, next) => {
    const query = {id:req.params.id};
    User.findOne(query)
    .then(user => {
        user.id = req.body.id, 
        user.name = req.body.name, 
        User.updateOne(query, user)
        .then(result => {
            res.status(204).json({
                message: 'User updated successfully'
            })
        })
        .catch(error => {
            res.status(500).json({
                message: 'An error occurred', 
                error: error
            });
        });
    })
    .catch(error => {
        res.status(500).json({
            message: 'User not found.',
            error: {user: 'User not found'}
        });
    });
});
//DELETE
router.delete('/:id', (req, res, next) => {
    const query = {'id':req.params.id};
    User.findOne(query)
    .then(user => {
        User.deleteOne(query)
        .then(result => {
            res.status(204).json({
                message: 'User deleted successfully'
            });
        })
        .catch(error => {
            res.status(500).json({
                message: 'An error occurred', 
                error: error
            });
        })
    })
    .catch(error => {
        res.status(500).json({
            message: 'User not found.', 
            error: { document: 'User not found'}
        });
    });
});






