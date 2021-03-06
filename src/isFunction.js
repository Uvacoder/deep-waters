import ofClass from './ofClass';

/**
 * Returns true if the given value is of type function
 *
 * According to: https://stackoverflow.com/questions/5999998/check-if-a-variable-is-of-function-type
 * @param fn
 * @returns {boolean|boolean}
 */
const isFunction = ofClass('Function');

export default isFunction;
