import * as wasm from "./pkg/chip8-wasm";
import * as tunes from "./tones.js";

let processor = wasm.Processor.new();

let game_names_all = String.fromCharCode(...processor.get_game_names());
let game_names = game_names_all.split(",").filter((x) => x != "");

const canvas = document.getElementById("canvas");
canvas.width = 640;
canvas.height = 320;
const ctx = canvas.getContext("2d", { alpha: false });

function generate_options() {
  let select = document.getElementById("current-game");
  game_names.forEach((element, index) => {
    let opt = document.createElement("option");
    if (element === "IBM_Logo.ch8") {
      opt.setAttribute("selected", "selected");
    }
    opt.setAttribute("index", index);
    opt.value = element;
    opt.innerHTML = element;
    select.appendChild(opt);
  });
}

function draw(current) {
  let counter = 0;
  for (let i = 0; i < 32; ++i) {
    for (let j = 0; j < 64; ++j) {
      ctx.fillStyle = `rgb(${current[counter]},${current[counter]},${current[counter]}`;
      ctx.fillRect(j * 10, i * 10, 10, 10);
      ++counter;
    }
  }
}

let running = true;

const renderLoop = () => {
  // console.log(performance.now());
  if (processor.should_play_sound()) {
    tunes.playSingleFrequency();
  }
  requestAnimationFrame(() => draw(processor.get_vram()));
};

const tickLoop = () => {
  // console.log(performance.now());
  for (let i = 0; i < instructions; ++i) {
    processor.tick();
  }
  if (running) {
    setTimeout(tickLoop);
  }
};

function start() {
  if (!running) {
    running = true;
    renderInterval = setInterval(renderLoop, 16);
    setTimeout(tickLoop);
  }
}

function stop() {
  if (running) {
    running = false;
    clearInterval(renderInterval);
  }
}

let instructions = 4;
let renderInterval = setInterval(renderLoop, 16);
setTimeout(tickLoop, 0);
generate_options();

document.getElementById("slider").addEventListener("input", (event) => {
  instructions = event.target.value;
  document.getElementById("slider-value-text").textContent = instructions;
});

document.getElementById("start-button").addEventListener("mouseup", (event) => {
  start();
});

document.getElementById("stop-button").addEventListener("mouseup", (event) => {
  stop();
});
document.getElementById("reset-button").addEventListener("mouseup", (event) => {
  processor.load_game(document.getElementById("current-game").selectedIndex);
  start();
});

document.getElementById("current-game").addEventListener("change", (event) => {
  processor.load_game(event.target.selectedIndex);
  start();
});

canvas.addEventListener("keydown", (event) => {
  if (event.key == "ArrowUp") {
    let slider = document.getElementById("slider");
    slider.stepUp();
    slider.dispatchEvent(new Event("input"));
  }
  if (event.key == "ArrowDown") {
    let slider = document.getElementById("slider");
    slider.stepDown();
    slider.dispatchEvent(new Event("input"));
  }

  if (event.key == "ArrowLeft") {
    let select = document.getElementById("current-game");
    select.selectedIndex -= 1;
    if (select.selectedIndex === -1) {
      select.selectedIndex = select.childElementCount - 1 ;
    }
    select.dispatchEvent(new Event("change"));
  }

  if (event.key == "ArrowRight") {
    let select = document.getElementById("current-game");
    select.selectedIndex += 1;
    if (select.selectedIndex === -1) {
      select.selectedIndex = 0;
    }
    select.dispatchEvent(new Event("change"));
  }

  if (event.key == " ") {
    if (running) {
      document.getElementById("stop-button").dispatchEvent(new Event("mouseup"))
    }
    else {
      document.getElementById("start-button").dispatchEvent(new Event("mouseup"))
    }
  }

  if (event.key == "1") {
    processor.set_key(0x01);
  }
  if (event.key == "2") {
    processor.set_key(0x02);
  }
  if (event.key == "3") {
    processor.set_key(0x03);
  }
  if (event.key == "4") {
    processor.set_key(0x0c);
  }
  if (event.key == "q") {
    processor.set_key(0x04);
  }
  if (event.key == "w") {
    processor.set_key(0x05);
  }
  if (event.key == "e") {
    processor.set_key(0x06);
  }
  if (event.key == "r") {
    processor.set_key(0x0d);
  }
  if (event.key == "a") {
    processor.set_key(0x07);
  }
  if (event.key == "s") {
    processor.set_key(0x08);
  }
  if (event.key == "d") {
    processor.set_key(0x09);
  }
  if (event.key == "f") {
    processor.set_key(0x0f);
  }
  if (event.key == "y") {
    processor.set_key(0x0a);
  }
  if (event.key == "x") {
    processor.set_key(0x00);
  }
  if (event.key == "c") {
    processor.set_key(0x0b);
  }
  if (event.key == "v") {
    processor.set_key(0x0f);
  }
});
canvas.addEventListener("keyup", (event) => {
  if (event.key == "1") {
    processor.clear_key(0x01);
  }
  if (event.key == "2") {
    processor.clear_key(0x02);
  }
  if (event.key == "3") {
    processor.clear_key(0x03);
  }
  if (event.key == "4") {
    processor.clear_key(0x0c);
  }
  if (event.key == "q") {
    processor.clear_key(0x04);
  }
  if (event.key == "w") {
    processor.clear_key(0x05);
  }
  if (event.key == "e") {
    processor.clear_key(0x06);
  }
  if (event.key == "r") {
    processor.clear_key(0x0d);
  }
  if (event.key == "a") {
    processor.clear_key(0x07);
  }
  if (event.key == "s") {
    processor.clear_key(0x08);
  }
  if (event.key == "d") {
    processor.clear_key(0x09);
  }
  if (event.key == "f") {
    processor.clear_key(0x0f);
  }
  if (event.key == "y") {
    processor.clear_key(0x0a);
  }
  if (event.key == "x") {
    processor.clear_key(0x00);
  }
  if (event.key == "c") {
    processor.clear_key(0x0b);
  }
  if (event.key == "v") {
    processor.clear_key(0x0f);
  }
});
