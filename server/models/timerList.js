const mongoose = require('mongoose');
const { ObjectID } = require('mongodb');

const TimerListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  _creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  rows: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'timerRow'
  }]
});

var TimerList = mongoose.model('timerList', TimerListSchema);

module.exports = {
  TimerList
};
