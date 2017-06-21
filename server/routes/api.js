const express = require('express');
const { ObjectID } = require('mongodb');
const _ = require('lodash');

const router = new express.Router();

// Load middleware
const { authenticate } = require('./../middleware/authenticate');

// Load models
const { TimerList } = require('./../models/timerList');
const { TimerRow } = require('./../models/timerRow');

// route for add new list
router.post('/timerlist', authenticate, (req, res) => {
  var timerList = new TimerList({
    name: req.body.name,
    _creator: req.user._id
  });

  timerList.save().then((timerList) => {
    return res.send(timerList);
  }).catch((err) => {
    return res.status(400).send(err);
  });

});

// route for getting a saved list
// router.get('/timerlist/:id', (req, res) => {
//   var _id = req.params.id;
//   TimerList.find().then((timerList) => {
//     res.send({ timerList }); // return the array on an object
//   }).catch((err) => {
//     res.status(400).send(err);
//   })
// });


// route for a 'new row'
router.post('/timerlist/:id/row', authenticate, (req, res) => {
  var _id = req.params.id;

  var timerRow = new TimerRow({
    _creator: req.user._id
  });

  TimerList.findOne({
    _id,
    _creator: req.user._id
  }).then((timerList) => {
    if (!timerList) {
      return res.status(404).send();
    }

    timerList.rows.push(timerRow);
    timerRow.timerList = timerList;

    timerRow.save().then(() => {
      timerList.save().then((timerList) => {
        return res.send(timerList);
      }).catch((err) => {
        return res.status(400).send(err);
      });
    }).catch((err) => {
      return res.status(400).send(err);
    });
  });

});


// route for updating a row
router.patch('/row/:id', authenticate, (req, res) => {
  var _id = req.params.id;
  if (!ObjectID.isValid(_id)) {
    return res.status(404).send();
  }

  // var rowUpdates = req.body.row;
  var rowUpdates = _.pick(req.body, ['time', 'sound', 'enabled']);

  TimerRow.findOneAndUpdate({
    _id,
    _creator : req.user._id
  },
  rowUpdates,
  { new: true }).then((timerRow) => {
    return res.send(timerRow);
  }).catch((err) => {
    return res.status(400).send(err);
  });

});


module.exports = {
  router
};
