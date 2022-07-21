const mongoose = require('mongoose');

const locationSchema = mongoose.Schema({
    _id: {type: mongoose.Schema.Types.ObjectId},
    id: {type: Number}, 
    code: {type: String}, 
    latitude: {type: Number}, 
    longitude: {type: Number}, 
    name: {type: String}
}, { collection : 'location' }
);
module.exports = mongoose.model('Location', locationSchema);

//had to enter collection: location because mongoose pluralizes 
//collection names unless otherwise specified