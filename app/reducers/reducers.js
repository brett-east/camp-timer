import uuid from 'uuid';

var defaultState = [
    {
      id: uuid(),
      time: 0,
      sound: '',
      enabled: true
    }
  ];

export var rowReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_ROW':
      return [
      	...state,
          {
            id: uuid(),
          	time: 0,
            sound: '',
            enabled: true
        	}
        ];
    case 'REMOVE_ROW':
      return state.filter((row) => row.id !== action.id);
    case 'UPDATE_ROW_TIME':
      return state.map((row) => {
        if(row.id === action.id) {
          return {
            ...row,
            time: action.time
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
    default:
      return state;
	}
}
