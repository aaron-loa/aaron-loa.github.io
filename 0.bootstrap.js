(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/chip8_wasm.js":
/*!****************************!*\
  !*** ../pkg/chip8_wasm.js ***!
  \****************************/
/*! exports provided: __wbg_set_wasm, Processor, __wbg_randomFillSync_6894564c2c334c42, __wbindgen_object_drop_ref, __wbg_getRandomValues_805f1c3d65988a5a, __wbg_crypto_e1d53a1d73fb10b8, __wbindgen_is_object, __wbg_process_038c26bf42b093f8, __wbg_versions_ab37218d2f0b24a8, __wbg_node_080f4b19d15bc1fe, __wbindgen_is_string, __wbg_require_78a3dcfbdba9cbce, __wbindgen_string_new, __wbg_msCrypto_6e7d3e1f92610cbb, __wbindgen_is_function, __wbg_newnoargs_2b8b6bd7753c76ba, __wbg_call_95d1ea488d03e4e8, __wbg_self_e7c1f827057f6584, __wbg_window_a09ec664e14b1b81, __wbg_globalThis_87cbb8506fecf3a9, __wbg_global_c85a9259e621f3db, __wbindgen_is_undefined, __wbg_call_9495de66fdbe016b, __wbg_buffer_cf65c07de34b9a08, __wbg_new_537b7341ce90bb31, __wbg_set_17499e8aa4003ebd, __wbg_length_27a2afe8ab42b09f, __wbg_newwithlength_b56c882b57805732, __wbg_subarray_7526649b91a252a6, __wbindgen_object_clone_ref, __wbindgen_throw, __wbindgen_memory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chip8_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chip8_wasm_bg.wasm */ \"../pkg/chip8_wasm_bg.wasm\");\n/* harmony import */ var _chip8_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chip8_wasm_bg.js */ \"../pkg/chip8_wasm_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_wasm\", function() { return _chip8_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_set_wasm\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Processor\", function() { return _chip8_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Processor\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_randomFillSync_6894564c2c334c42\", function() { return _chip8_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_randomFillSync_6894564c2c334c42\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return _chip8_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_drop_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getRandomValues_805f1c3d65988a5a\", function() { return _chip8_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_getRandomValues_805f1c3d65988a5a\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_crypto_e1d53a1d73fb10b8\", function() { return _chip8_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_crypto_e1d53a1d73fb10b8\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_object\", function() { return _chip8_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_is_object\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_process_038c26bf42b093f8\", function() { return _chip8_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_process_038c26bf42b093f8\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_versions_ab37218d2f0b24a8\", function() { return _chip8_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_versions_ab37218d2f0b24a8\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_node_080f4b19d15bc1fe\", function() { return _chip8_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_node_080f4b19d15bc1fe\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_string\", function() { return _chip8_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_is_string\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_require_78a3dcfbdba9cbce\", function() { return _chip8_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_require_78a3dcfbdba9cbce\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return _chip8_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_string_new\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_msCrypto_6e7d3e1f92610cbb\", function() { return _chip8_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_msCrypto_6e7d3e1f92610cbb\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_function\", function() { return _chip8_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_is_function\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_2b8b6bd7753c76ba\", function() { return _chip8_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_newnoargs_2b8b6bd7753c76ba\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_95d1ea488d03e4e8\", function() { return _chip8_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_call_95d1ea488d03e4e8\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_e7c1f827057f6584\", function() { return _chip8_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_self_e7c1f827057f6584\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_window_a09ec664e14b1b81\", function() { return _chip8_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_window_a09ec664e14b1b81\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_globalThis_87cbb8506fecf3a9\", function() { return _chip8_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_globalThis_87cbb8506fecf3a9\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_global_c85a9259e621f3db\", function() { return _chip8_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_global_c85a9259e621f3db\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return _chip8_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_is_undefined\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_9495de66fdbe016b\", function() { return _chip8_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_call_9495de66fdbe016b\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_buffer_cf65c07de34b9a08\", function() { return _chip8_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_buffer_cf65c07de34b9a08\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_537b7341ce90bb31\", function() { return _chip8_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_new_537b7341ce90bb31\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_17499e8aa4003ebd\", function() { return _chip8_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_set_17499e8aa4003ebd\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_length_27a2afe8ab42b09f\", function() { return _chip8_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_length_27a2afe8ab42b09f\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newwithlength_b56c882b57805732\", function() { return _chip8_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_newwithlength_b56c882b57805732\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_subarray_7526649b91a252a6\", function() { return _chip8_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_subarray_7526649b91a252a6\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return _chip8_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_clone_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _chip8_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_memory\", function() { return _chip8_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_memory\"]; });\n\n\n\nObject(_chip8_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_set_wasm\"])(_chip8_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n//# sourceURL=webpack:///../pkg/chip8_wasm.js?");

/***/ }),

/***/ "../pkg/chip8_wasm_bg.js":
/*!*******************************!*\
  !*** ../pkg/chip8_wasm_bg.js ***!
  \*******************************/
/*! exports provided: __wbg_set_wasm, Processor, __wbg_randomFillSync_6894564c2c334c42, __wbindgen_object_drop_ref, __wbg_getRandomValues_805f1c3d65988a5a, __wbg_crypto_e1d53a1d73fb10b8, __wbindgen_is_object, __wbg_process_038c26bf42b093f8, __wbg_versions_ab37218d2f0b24a8, __wbg_node_080f4b19d15bc1fe, __wbindgen_is_string, __wbg_require_78a3dcfbdba9cbce, __wbindgen_string_new, __wbg_msCrypto_6e7d3e1f92610cbb, __wbindgen_is_function, __wbg_newnoargs_2b8b6bd7753c76ba, __wbg_call_95d1ea488d03e4e8, __wbg_self_e7c1f827057f6584, __wbg_window_a09ec664e14b1b81, __wbg_globalThis_87cbb8506fecf3a9, __wbg_global_c85a9259e621f3db, __wbindgen_is_undefined, __wbg_call_9495de66fdbe016b, __wbg_buffer_cf65c07de34b9a08, __wbg_new_537b7341ce90bb31, __wbg_set_17499e8aa4003ebd, __wbg_length_27a2afe8ab42b09f, __wbg_newwithlength_b56c882b57805732, __wbg_subarray_7526649b91a252a6, __wbindgen_object_clone_ref, __wbindgen_throw, __wbindgen_memory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_wasm\", function() { return __wbg_set_wasm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Processor\", function() { return Processor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_randomFillSync_6894564c2c334c42\", function() { return __wbg_randomFillSync_6894564c2c334c42; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getRandomValues_805f1c3d65988a5a\", function() { return __wbg_getRandomValues_805f1c3d65988a5a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_crypto_e1d53a1d73fb10b8\", function() { return __wbg_crypto_e1d53a1d73fb10b8; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_object\", function() { return __wbindgen_is_object; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_process_038c26bf42b093f8\", function() { return __wbg_process_038c26bf42b093f8; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_versions_ab37218d2f0b24a8\", function() { return __wbg_versions_ab37218d2f0b24a8; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_node_080f4b19d15bc1fe\", function() { return __wbg_node_080f4b19d15bc1fe; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_string\", function() { return __wbindgen_is_string; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_require_78a3dcfbdba9cbce\", function() { return __wbg_require_78a3dcfbdba9cbce; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_msCrypto_6e7d3e1f92610cbb\", function() { return __wbg_msCrypto_6e7d3e1f92610cbb; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_function\", function() { return __wbindgen_is_function; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_2b8b6bd7753c76ba\", function() { return __wbg_newnoargs_2b8b6bd7753c76ba; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_95d1ea488d03e4e8\", function() { return __wbg_call_95d1ea488d03e4e8; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_e7c1f827057f6584\", function() { return __wbg_self_e7c1f827057f6584; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_window_a09ec664e14b1b81\", function() { return __wbg_window_a09ec664e14b1b81; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_globalThis_87cbb8506fecf3a9\", function() { return __wbg_globalThis_87cbb8506fecf3a9; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_global_c85a9259e621f3db\", function() { return __wbg_global_c85a9259e621f3db; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return __wbindgen_is_undefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_9495de66fdbe016b\", function() { return __wbg_call_9495de66fdbe016b; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_buffer_cf65c07de34b9a08\", function() { return __wbg_buffer_cf65c07de34b9a08; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_537b7341ce90bb31\", function() { return __wbg_new_537b7341ce90bb31; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_17499e8aa4003ebd\", function() { return __wbg_set_17499e8aa4003ebd; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_length_27a2afe8ab42b09f\", function() { return __wbg_length_27a2afe8ab42b09f; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newwithlength_b56c882b57805732\", function() { return __wbg_newwithlength_b56c882b57805732; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_subarray_7526649b91a252a6\", function() { return __wbg_subarray_7526649b91a252a6; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return __wbindgen_object_clone_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_memory\", function() { return __wbindgen_memory; });\nlet wasm;\nfunction __wbg_set_wasm(val) {\n    wasm = val;\n}\n\n\nconst heap = new Array(128).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 132) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0 = null;\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nlet cachedInt32Memory0 = null;\n\nfunction getInt32Memory0() {\n    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {\n        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);\n    }\n    return cachedInt32Memory0;\n}\n\nfunction getArrayU8FromWasm0(ptr, len) {\n    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);\n}\n\nfunction handleError(f, args) {\n    try {\n        return f.apply(this, args);\n    } catch (e) {\n        wasm.__wbindgen_exn_store(addHeapObject(e));\n    }\n}\n/**\n*/\nclass Processor {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Processor.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_processor_free(ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    get delay_timer() {\n        const ret = wasm.__wbg_get_processor_delay_timer(this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set delay_timer(arg0) {\n        wasm.__wbg_set_processor_delay_timer(this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n    get sound_timer() {\n        const ret = wasm.__wbg_get_processor_sound_timer(this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set sound_timer(arg0) {\n        wasm.__wbg_set_processor_sound_timer(this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n    get pc() {\n        const ret = wasm.__wbg_get_processor_pc(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set pc(arg0) {\n        wasm.__wbg_set_processor_pc(this.ptr, arg0);\n    }\n    /**\n    * @returns {boolean}\n    */\n    get vram_changed() {\n        const ret = wasm.__wbg_get_processor_vram_changed(this.ptr);\n        return ret !== 0;\n    }\n    /**\n    * @param {boolean} arg0\n    */\n    set vram_changed(arg0) {\n        wasm.__wbg_set_processor_vram_changed(this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n    get i() {\n        const ret = wasm.__wbg_get_processor_i(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set i(arg0) {\n        wasm.__wbg_set_processor_i(this.ptr, arg0);\n    }\n    /**\n    * @returns {Processor}\n    */\n    static new() {\n        const ret = wasm.processor_new();\n        return Processor.__wrap(ret);\n    }\n    /**\n    * @returns {Uint8Array}\n    */\n    get_vram() {\n        try {\n            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);\n            wasm.processor_get_vram(retptr, this.ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            var v0 = getArrayU8FromWasm0(r0, r1).slice();\n            wasm.__wbindgen_free(r0, r1 * 1);\n            return v0;\n        } finally {\n            wasm.__wbindgen_add_to_stack_pointer(16);\n        }\n    }\n    /**\n    * @returns {Uint8Array}\n    */\n    get_game_names() {\n        try {\n            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);\n            wasm.processor_get_game_names(retptr, this.ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            var v0 = getArrayU8FromWasm0(r0, r1).slice();\n            wasm.__wbindgen_free(r0, r1 * 1);\n            return v0;\n        } finally {\n            wasm.__wbindgen_add_to_stack_pointer(16);\n        }\n    }\n    /**\n    * @returns {boolean}\n    */\n    should_play_sound() {\n        const ret = wasm.processor_should_play_sound(this.ptr);\n        return ret !== 0;\n    }\n    /**\n    */\n    reset() {\n        wasm.processor_reset(this.ptr);\n    }\n    /**\n    * @param {number} index\n    */\n    load_game(index) {\n        wasm.processor_load_game(this.ptr, index);\n    }\n    /**\n    */\n    clear_keypad() {\n        wasm.processor_clear_keypad(this.ptr);\n    }\n    /**\n    */\n    tick() {\n        wasm.processor_tick(this.ptr);\n    }\n    /**\n    * @param {number} x\n    */\n    set_key(x) {\n        wasm.processor_set_key(this.ptr, x);\n    }\n    /**\n    * @param {number} x\n    */\n    clear_key(x) {\n        wasm.processor_clear_key(this.ptr, x);\n    }\n}\n\nfunction __wbg_randomFillSync_6894564c2c334c42() { return handleError(function (arg0, arg1, arg2) {\n    getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));\n}, arguments) };\n\nfunction __wbindgen_object_drop_ref(arg0) {\n    takeObject(arg0);\n};\n\nfunction __wbg_getRandomValues_805f1c3d65988a5a() { return handleError(function (arg0, arg1) {\n    getObject(arg0).getRandomValues(getObject(arg1));\n}, arguments) };\n\nfunction __wbg_crypto_e1d53a1d73fb10b8(arg0) {\n    const ret = getObject(arg0).crypto;\n    return addHeapObject(ret);\n};\n\nfunction __wbindgen_is_object(arg0) {\n    const val = getObject(arg0);\n    const ret = typeof(val) === 'object' && val !== null;\n    return ret;\n};\n\nfunction __wbg_process_038c26bf42b093f8(arg0) {\n    const ret = getObject(arg0).process;\n    return addHeapObject(ret);\n};\n\nfunction __wbg_versions_ab37218d2f0b24a8(arg0) {\n    const ret = getObject(arg0).versions;\n    return addHeapObject(ret);\n};\n\nfunction __wbg_node_080f4b19d15bc1fe(arg0) {\n    const ret = getObject(arg0).node;\n    return addHeapObject(ret);\n};\n\nfunction __wbindgen_is_string(arg0) {\n    const ret = typeof(getObject(arg0)) === 'string';\n    return ret;\n};\n\nfunction __wbg_require_78a3dcfbdba9cbce() { return handleError(function () {\n    const ret = module.require;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbindgen_string_new(arg0, arg1) {\n    const ret = getStringFromWasm0(arg0, arg1);\n    return addHeapObject(ret);\n};\n\nfunction __wbg_msCrypto_6e7d3e1f92610cbb(arg0) {\n    const ret = getObject(arg0).msCrypto;\n    return addHeapObject(ret);\n};\n\nfunction __wbindgen_is_function(arg0) {\n    const ret = typeof(getObject(arg0)) === 'function';\n    return ret;\n};\n\nfunction __wbg_newnoargs_2b8b6bd7753c76ba(arg0, arg1) {\n    const ret = new Function(getStringFromWasm0(arg0, arg1));\n    return addHeapObject(ret);\n};\n\nfunction __wbg_call_95d1ea488d03e4e8() { return handleError(function (arg0, arg1) {\n    const ret = getObject(arg0).call(getObject(arg1));\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_self_e7c1f827057f6584() { return handleError(function () {\n    const ret = self.self;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_window_a09ec664e14b1b81() { return handleError(function () {\n    const ret = window.window;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_globalThis_87cbb8506fecf3a9() { return handleError(function () {\n    const ret = globalThis.globalThis;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_global_c85a9259e621f3db() { return handleError(function () {\n    const ret = global.global;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbindgen_is_undefined(arg0) {\n    const ret = getObject(arg0) === undefined;\n    return ret;\n};\n\nfunction __wbg_call_9495de66fdbe016b() { return handleError(function (arg0, arg1, arg2) {\n    const ret = getObject(arg0).call(getObject(arg1), getObject(arg2));\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_buffer_cf65c07de34b9a08(arg0) {\n    const ret = getObject(arg0).buffer;\n    return addHeapObject(ret);\n};\n\nfunction __wbg_new_537b7341ce90bb31(arg0) {\n    const ret = new Uint8Array(getObject(arg0));\n    return addHeapObject(ret);\n};\n\nfunction __wbg_set_17499e8aa4003ebd(arg0, arg1, arg2) {\n    getObject(arg0).set(getObject(arg1), arg2 >>> 0);\n};\n\nfunction __wbg_length_27a2afe8ab42b09f(arg0) {\n    const ret = getObject(arg0).length;\n    return ret;\n};\n\nfunction __wbg_newwithlength_b56c882b57805732(arg0) {\n    const ret = new Uint8Array(arg0 >>> 0);\n    return addHeapObject(ret);\n};\n\nfunction __wbg_subarray_7526649b91a252a6(arg0, arg1, arg2) {\n    const ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);\n    return addHeapObject(ret);\n};\n\nfunction __wbindgen_object_clone_ref(arg0) {\n    const ret = getObject(arg0);\n    return addHeapObject(ret);\n};\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\nfunction __wbindgen_memory() {\n    const ret = wasm.memory;\n    return addHeapObject(ret);\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module), __webpack_require__(/*! ./../www/node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///../pkg/chip8_wasm_bg.js?");

/***/ }),

/***/ "../pkg/chip8_wasm_bg.wasm":
/*!*********************************!*\
  !*** ../pkg/chip8_wasm_bg.wasm ***!
  \*********************************/
/*! exports provided: memory, __wbg_processor_free, __wbg_get_processor_delay_timer, __wbg_set_processor_delay_timer, __wbg_get_processor_sound_timer, __wbg_set_processor_sound_timer, __wbg_get_processor_pc, __wbg_set_processor_pc, __wbg_get_processor_vram_changed, __wbg_set_processor_vram_changed, __wbg_get_processor_i, __wbg_set_processor_i, processor_new, processor_get_vram, processor_get_game_names, processor_should_play_sound, processor_reset, processor_load_game, processor_clear_keypad, processor_tick, processor_set_key, processor_clear_key, __wbindgen_add_to_stack_pointer, __wbindgen_free, __wbindgen_exn_store */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./chip8_wasm_bg.js */ \"../pkg/chip8_wasm_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/chip8_wasm_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var chip8_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chip8-wasm */ \"../pkg/chip8_wasm.js\");\n/* harmony import */ var _tones_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tones.js */ \"./tones.js\");\n/* harmony import */ var _tones_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tones_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nlet processor = chip8_wasm__WEBPACK_IMPORTED_MODULE_0__[\"Processor\"].new();\n\nlet game_names_all = String.fromCharCode(...processor.get_game_names());\nlet game_names = game_names_all.split(\",\").filter((x) => x != \"\");\n\nconst canvas = document.getElementById(\"canvas\");\ncanvas.width = 640;\ncanvas.height = 320;\nconst ctx = canvas.getContext(\"2d\", { alpha: false });\n\nfunction generate_options() {\n  let select = document.getElementById(\"current-game\");\n  game_names.forEach((element, index) => {\n    let opt = document.createElement(\"option\");\n    if (element === \"IBM_Logo.ch8\") {\n      opt.setAttribute(\"selected\", \"selected\");\n    }\n    opt.setAttribute(\"index\", index);\n    opt.value = element;\n    opt.innerHTML = element;\n    select.appendChild(opt);\n  });\n}\n\nfunction draw(current) {\n  let counter = 0;\n  for (let i = 0; i < 32; ++i) {\n    for (let j = 0; j < 64; ++j) {\n      ctx.fillStyle = `rgb(${current[counter]},${current[counter]},${current[counter]}`;\n      ctx.fillRect(j * 10, i * 10, 10, 10);\n      ++counter;\n    }\n  }\n}\n\nlet running = true;\n\nconst renderLoop = () => {\n  // console.log(performance.now());\n  if (processor.should_play_sound()) {\n    _tones_js__WEBPACK_IMPORTED_MODULE_1__[\"playSingleFrequency\"]();\n  }\n  requestAnimationFrame(() => draw(processor.get_vram()));\n};\n\nconst tickLoop = () => {\n  // console.log(performance.now());\n  for (let i = 0; i < instructions; ++i) {\n    processor.tick();\n  }\n  if (running) {\n    setTimeout(tickLoop);\n  }\n};\n\nfunction start() {\n  if (!running) {\n    running = true;\n    renderInterval = setInterval(renderLoop, 16);\n    setTimeout(tickLoop);\n  }\n}\n\nfunction stop() {\n  if (running) {\n    running = false;\n    clearInterval(renderInterval);\n  }\n}\n\nlet instructions = 4;\nlet renderInterval = setInterval(renderLoop, 16);\nsetTimeout(tickLoop, 0);\ngenerate_options();\n\ndocument.getElementById(\"slider\").addEventListener(\"input\", (event) => {\n  instructions = event.target.value;\n  document.getElementById(\"slider-value-text\").textContent = instructions;\n});\n\ndocument.getElementById(\"start-button\").addEventListener(\"mouseup\", (event) => {\n  start();\n});\n\ndocument.getElementById(\"stop-button\").addEventListener(\"mouseup\", (event) => {\n  stop();\n});\ndocument.getElementById(\"reset-button\").addEventListener(\"mouseup\", (event) => {\n  processor.load_game(document.getElementById(\"current-game\").selectedIndex);\n  start();\n});\n\ndocument.getElementById(\"current-game\").addEventListener(\"change\", (event) => {\n  processor.load_game(event.target.selectedIndex);\n  start();\n});\n\ncanvas.addEventListener(\"keydown\", (event) => {\n  if (event.detail != 0) {\n    event.key = event.detail\n  }\n  if (event.key == \"ArrowUp\") {\n    let slider = document.getElementById(\"slider\");\n    slider.stepUp();\n    slider.dispatchEvent(new Event(\"input\"));\n  }\n  if (event.key == \"ArrowDown\") {\n    let slider = document.getElementById(\"slider\");\n    slider.stepDown();\n    slider.dispatchEvent(new Event(\"input\"));\n  }\n\n  if (event.key == \"ArrowLeft\") {\n    let select = document.getElementById(\"current-game\");\n    select.selectedIndex -= 1;\n    if (select.selectedIndex === -1) {\n      select.selectedIndex = select.childElementCount - 1;\n    }\n    select.dispatchEvent(new Event(\"change\"));\n  }\n\n  if (event.key == \"ArrowRight\") {\n    let select = document.getElementById(\"current-game\");\n    select.selectedIndex += 1;\n    if (select.selectedIndex === -1) {\n      select.selectedIndex = 0;\n    }\n    select.dispatchEvent(new Event(\"change\"));\n  }\n\n  if (event.key == \" \") {\n    if (running) {\n      document\n        .getElementById(\"stop-button\")\n        .dispatchEvent(new Event(\"mouseup\"));\n    } else {\n      document\n        .getElementById(\"start-button\")\n        .dispatchEvent(new Event(\"mouseup\"));\n    }\n  }\n\n  if (event.key == \"1\") {\n    processor.set_key(0x01);\n  }\n  if (event.key == \"2\") {\n    processor.set_key(0x02);\n  }\n  if (event.key == \"3\") {\n    processor.set_key(0x03);\n  }\n  if (event.key == \"4\") {\n    processor.set_key(0x0c);\n  }\n  if (event.key == \"q\") {\n    processor.set_key(0x04);\n  }\n  if (event.key == \"w\") {\n    processor.set_key(0x05);\n  }\n  if (event.key == \"e\") {\n    processor.set_key(0x06);\n  }\n  if (event.key == \"r\") {\n    processor.set_key(0x0d);\n  }\n  if (event.key == \"a\") {\n    processor.set_key(0x07);\n  }\n  if (event.key == \"s\") {\n    processor.set_key(0x08);\n  }\n  if (event.key == \"d\") {\n    processor.set_key(0x09);\n  }\n  if (event.key == \"f\") {\n    processor.set_key(0x0f);\n  }\n  if (event.key == \"y\") {\n    processor.set_key(0x0a);\n  }\n  if (event.key == \"x\") {\n    processor.set_key(0x00);\n  }\n  if (event.key == \"c\") {\n    processor.set_key(0x0b);\n  }\n  if (event.key == \"v\") {\n    processor.set_key(0x0f);\n  }\n});\ncanvas.addEventListener(\"keyup\", (event) => {\n  if (event.detail != 0) {\n    event.key = event.detail\n  }\n  if (event.key == \"1\") {\n    processor.clear_key(0x01);\n  }\n  if (event.key == \"2\") {\n    processor.clear_key(0x02);\n  }\n  if (event.key == \"3\") {\n    processor.clear_key(0x03);\n  }\n  if (event.key == \"4\") {\n    processor.clear_key(0x0c);\n  }\n  if (event.key == \"q\") {\n    processor.clear_key(0x04);\n  }\n  if (event.key == \"w\") {\n    processor.clear_key(0x05);\n  }\n  if (event.key == \"e\") {\n    processor.clear_key(0x06);\n  }\n  if (event.key == \"r\") {\n    processor.clear_key(0x0d);\n  }\n  if (event.key == \"a\") {\n    processor.clear_key(0x07);\n  }\n  if (event.key == \"s\") {\n    processor.clear_key(0x08);\n  }\n  if (event.key == \"d\") {\n    processor.clear_key(0x09);\n  }\n  if (event.key == \"f\") {\n    processor.clear_key(0x0f);\n  }\n  if (event.key == \"y\") {\n    processor.clear_key(0x0a);\n  }\n  if (event.key == \"x\") {\n    processor.clear_key(0x00);\n  }\n  if (event.key == \"c\") {\n    processor.clear_key(0x0b);\n  }\n  if (event.key == \"v\") {\n    processor.clear_key(0x0f);\n  }\n});\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./tones.js":
/*!******************!*\
  !*** ./tones.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// https://github.com/escottalexander/simpleTones.js\n\n//Create Audio Context\nlet AudioContext = window.AudioContext || window.webkitAudioContext;\nlet context = new AudioContext();\n\nlet o = null;\nlet g = null;\ng = context.createGain();\ng.connect(context.destination);\ng.gain.value = 0.0001;\n\n// Plays single tones. Helperfunction for playChord and playTone, but can also be used by itself.\nconst playSingleFrequency = (\n  frequency = 440,\n  type = \"square\",\n  duration = 0.16\n) => {\n  o = context.createOscillator();\n  o.connect(g);\n  o.type = type;\n  o.frequency.value = frequency;\n  o.start(0);\n  //g.gain.exponentialRampToValueAtTime(0.0001,context.currentTime + duration)\n  o.stop(context.currentTime + duration);\n};\n\nmodule.exports = {\n  playSingleFrequency,\n};\n\n\n//# sourceURL=webpack:///./tones.js?");

/***/ })

}]);