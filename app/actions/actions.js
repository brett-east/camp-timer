export var addRow = () => {
  return {
    type: 'ADD_ROW',
    row: {
      		id: 1,
      		time: 1250,
          sound: "reveille",
          enabled: true
         }
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

export var updateCurrentTime = () => {
  return {
    type: 'UPDATE_CURRENT_TIME'
  }
};
