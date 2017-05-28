import 'howler';

export var playSound = (sound) => {
  new Howl({
    src: [sound] // needs to be a path
  }).play();
}
