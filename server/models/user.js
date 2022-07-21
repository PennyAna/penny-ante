const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: {type: mongoose.Schema.Types.ObjectId},
    id: {type: Number}, 
    name: {type: String}
}, { collection : 'user' }
);
module.exports = mongoose.model('User', userSchema);