var Sequence = require('../models/sequence');

var maxLocationId;
var maxUserId;
var sequenceId = null;

function SequenceGenerator() {

  Sequence.findOne()
    .exec(function(err, sequence) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }

      sequenceId = sequence._id;
      maxLocationId = sequence.maxLocationId;
      maxUserId = sequence.maxUserId;
    });
}

SequenceGenerator.prototype.nextId = function(collectionType) {

  var updateObject = {};
  var nextId;

  switch (collectionType) {
    case 'location':
      maxLocationId++;
      updateObject = {maxLocationId: maxLocationId};
      nextId = maxLocationId;
      break;
    case 'user':
      maxUserId++;
      updateObject = {maxUserId: maxUserId};
      nextId = maxUserId;
      break;
    default:
      return -1;
  }

  Sequence.update({_id: sequenceId}, {$set: updateObject},
    function(err) {
      if (err) {
        console.log("nextId error = " + err);
        return null
      }
    });

  return nextId;
}

module.exports = new SequenceGenerator();
