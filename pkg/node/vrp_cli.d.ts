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
