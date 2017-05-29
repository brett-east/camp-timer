import 'howler';

export var playSound = (soundPath) => {
  new Howl({
    src: [soundPath] // needs to be a path
  }).play();
}
