export var updateCurrentTime = () => {
  return {
    type: 'UPDATE_CURRENT_TIME'
  }
};

export var validateTime = (id) => {
  return {
    type: 'VALIDATE_TIME',
    id
  }
};

export var sortRows = () => {
  return {
    type: 'SORT_ROWS'
  }
};

export var updateManualSound = (sound) => {
  return {
    type: 'UPDATE_MANUAL_SOUND',
    sound
  }
}

export var setCurrentlyPlaying = (sound) => {
  return {
    type: 'SET_CURRENTLY_PLAYING',
    sound
  }
};
