import uuid from 'uuid';
var moment = require('moment');

export var rowReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_USER':
      return state;
    case 'INIT_USER':
      return action.rows;
    case 'ADD_ROW':
      return [
      	...state,
        ...action.row
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
