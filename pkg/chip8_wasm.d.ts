/* tslint:disable */
/* eslint-disable */
/**
*/
export class Processor {
  free(): void;
/**
* @returns {Processor}
*/
  static new(): Processor;
/**
* @returns {Uint8Array}
*/
  get_vram(): Uint8Array;
/**
* @returns {Uint8Array}
*/
  get_game_names(): Uint8Array;
/**
* @returns {boolean}
*/
  should_play_sound(): boolean;
/**
*/
  reset(): void;
/**
* @param {number} index
*/
  load_game(index: number): void;
/**
*/
  clear_keypad(): void;
/**
*/
  tick(): void;
/**
* @param {number} x
*/
  set_key(x: number): void;
/**
* @param {number} x
*/
  clear_key(x: number): void;
/**
*/
  delay_timer: number;
/**
*/
  i: number;
/**
*/
  pc: number;
/**
*/
  sound_timer: number;
/**
*/
  vram_changed: boolean;
}
