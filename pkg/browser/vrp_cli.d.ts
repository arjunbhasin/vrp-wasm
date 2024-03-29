/* tslint:disable */
/* eslint-disable */
/**
* Returns a list of unique locations which can be used to request a routing matrix.
* A `problem` should be passed in `pragmatic` format.
* @param {any} problem
* @returns {any}
*/
export function get_routing_locations(problem: any): any;
/**
* Validates Vehicle Routing Problem passed in `pragmatic` format.
* @param {any} problem
* @param {any} matrices
* @returns {any}
*/
export function validate_pragmatic(problem: any, matrices: any): any;
/**
* Converts `problem` from format specified by `format` to `pragmatic` format.
* @param {string} format
* @param {any} inputs
* @returns {any}
*/
export function convert_to_pragmatic(format: string, inputs: any): any;
/**
* Solves Vehicle Routing Problem passed in `pragmatic` format.
* @param {any} problem
* @param {any} matrices
* @param {any} config
* @returns {any}
*/
export function solve_pragmatic(problem: any, matrices: any, config: any): any;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly get_routing_locations: (a: number, b: number) => void;
  readonly validate_pragmatic: (a: number, b: number, c: number) => void;
  readonly convert_to_pragmatic: (a: number, b: number, c: number, d: number) => void;
  readonly solve_pragmatic: (a: number, b: number, c: number, d: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_exn_store: (a: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
