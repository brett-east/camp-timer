import 'howler';

export var playSound = (soundPath, oldSound) => {
  if (oldSound) { oldSound.unload() }
  let sound = new Howl({
    src: [soundPath] // needs to be a path
  });
  sound.play();
  return sound;
}

export var stopSound = (sound) => {
  if (sound) {
    sound.unload();
  }
};

export var pauseSound = (sound) => {
  if (sound) {
    sound.pause();
  }
}

// Add an event listener to howler play and any time a sound plays, set
// a 'currently playing' state. Once the sound ends, clear the state,
// if a new sound plays, then first check if there is an old sound and stop
// it and remove it and then set the new sound
