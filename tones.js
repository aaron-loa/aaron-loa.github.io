// https://github.com/escottalexander/simpleTones.js

//Create Audio Context
let AudioContext = window.AudioContext || window.webkitAudioContext;
let context = new AudioContext();

let o = null;
let g = null;
g = context.createGain();
g.connect(context.destination);
g.gain.value = 0.0001;

// Plays single tones. Helperfunction for playChord and playTone, but can also be used by itself.
const playSingleFrequency = (
  frequency = 440,
  type = "square",
  duration = 0.16
) => {
  o = context.createOscillator();
  o.connect(g);
  o.type = type;
  o.frequency.value = frequency;
  o.start(0);
  //g.gain.exponentialRampToValueAtTime(0.0001,context.currentTime + duration)
  o.stop(context.currentTime + duration);
};

module.exports = {
  playSingleFrequency,
};