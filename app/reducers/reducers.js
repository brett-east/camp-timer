import uuid from 'uuid';
var moment = require('moment');

export var rowReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ROW':
      return [
      	...state,
          {
            id: uuid(),
          	time: '',
            sound: 'first_call',
            enabled: true
        	}
        ];
    case 'REMOVE_ROW':
      return state.filter((row) => row.id !== action.id);
    case 'UPDATE_ROW_TIME':
      return state.map((row) => {
        var time = action.time;
        if(row.id === action.id) {
          return {
            ...row,
            time
          };
        } else {
          return row;
        }
      });
    case 'VALIDATE_TIME':
    return state.map((row) => {
      var time = (moment(row.time, ['hmm a', 'h:mm a', 'HHmm']).format('h:mm a'));
      if(row.id === action.id) {
        return {
          ...row,
          time
        };
      } else {
        return row;
      }
    });
    case 'UPDATE_ROW_ENABLED':
      return state.map((row) => {
        if(row.id === action.id) {
          return {
            ...row,
            enabled: !row.enabled
          };
        } else {
          return row;
        }
      });
    case 'UPDATE_ROW_SOUND':
      return state.map((row) => {
        if(row.id === action.id) {
          return {
            ...row,
            sound: action.sound
          };
        } else {
          return row;
        }
      });
    case 'SORT_ROWS':
      let newState = state;
      return newState.sort((a, b) => {
        if (moment(a.time, 'h:mm a')
              .isBefore(moment(b.time, 'h:mm a').toDate())) {
          return -1;
        } else if (moment(a.time, 'h:mm a')
              .isAfter(moment(b.time, 'h:mm a').toDate())) {
          return 1;
        } else {
          return 0;
        }
      });
    default:
      return state;
	}
}


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
