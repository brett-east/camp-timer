export var startAddRow = () => {
  return (dispatch, getState) => {
    var row = {
      time: '',
      sound: '',
      enabled: true
    };
    // call add row api .then(() => dispatch(addRow(row));
  };
};

export var addRow = () => {
  return {
    type: 'ADD_ROW'
  }
};

export var removeRow = (id) => {
  return {
    type: 'REMOVE_ROW',
    id
  }
};

export var updateRowTime = (id, time) => {
  return {
    type: 'UPDATE_ROW_TIME',
    id,
    time
  }
};

export var updateRowEnabled = (id) => {
  return {
    type: 'UPDATE_ROW_ENABLED',
    id
  }
};

export var updateRowSound = (id, sound) => {
  return {
    type: 'UPDATE_ROW_SOUND',
    id,
    sound
  }
};
