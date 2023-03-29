/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export function __wbg_processor_free(a: number): void;
export function __wbg_get_processor_delay_timer(a: number): number;
export function __wbg_set_processor_delay_timer(a: number, b: number): void;
export function __wbg_get_processor_sound_timer(a: number): number;
export function __wbg_set_processor_sound_timer(a: number, b: number): void;
export function __wbg_get_processor_pc(a: number): number;
export function __wbg_set_processor_pc(a: number, b: number): void;
export function __wbg_get_processor_vram_changed(a: number): number;
export function __wbg_set_processor_vram_changed(a: number, b: number): void;
export function __wbg_get_processor_i(a: number): number;
export function __wbg_set_processor_i(a: number, b: number): void;
export function processor_new(): number;
export function processor_get_vram(a: number, b: number): void;
export function processor_get_game_names(a: number, b: number): void;
export function processor_should_play_sound(a: number): number;
export function processor_reset(a: number): void;
export function processor_load_game(a: number, b: number): void;
export function processor_clear_keypad(a: number): void;
export function processor_tick(a: number): void;
export function processor_set_key(a: number, b: number): void;
export function processor_clear_key(a: number, b: number): void;
export function __wbindgen_add_to_stack_pointer(a: number): number;
export function __wbindgen_free(a: number, b: number): void;
export function __wbindgen_exn_store(a: number): void;
