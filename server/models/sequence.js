const mongoose = require('mongoose');

const seqSchema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId}, 
    maxLocationId: {type: String, required: true}
});
module.exports = mongoose.model('Sequence', seqSchema);