const mongoose = require('mongoose');
const { ObjectID } = require('mongodb');

const TimerRowSchema = new mongoose.Schema({
  time: {
    type: String,
    default: ''
  },
  sound: {
    type: String,
    default: ''
  },
  enabled: {
    type: Boolean,
    default: true
  },
  _creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  timerList: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'timerList'
  }
});


var TimerRow = mongoose.model('timerRow', TimerRowSchema);

module.exports = {
  TimerRow
};
