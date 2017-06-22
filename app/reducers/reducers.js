import uuid from 'uuid';
var moment = require('moment');


export var currentTimeReducer = ( state = new moment(), action) => {
  switch (action.type) {
    case 'UPDATE_CURRENT_TIME':
      return new moment();
    default:
      return state;
  }
}

export var soundsReducer = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export var manualSoundReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_MANUAL_SOUND':
      return action.sound
    default:
      return state;
  }
}

export var currentlyPlayingReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_CURRENTLY_PLAYING':
      return action.sound
    default:
      return state;
  }
}
