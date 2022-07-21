var express = require('express');
var router = express.Router();
module.exports = router;
const sequenceGenerator = require('./sequenceGenerator');
const Location = require('../models/location');

//GET1
router.get('/:id', (req, res, next) => {
    console.log("in get1 location");
    const query = {'id': req.params.id};
    Location.findOne(query)
    .then(location => {
        res.status(200).json({
            message: 'Location Fetch', 
            location: location
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
    console.log("in get location");
    Location.find()
    .then(locations => {
        res.status(200).json({
            message: 'Locations fetched successfully!', 
            location: locations
        });
    })
    .catch(error => {
        res.status(500).json({
            message: 'An error occurred', 
            error: error
        });
    });
});