const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
    // if( !arr.length || !Array.isArray(arr)) return

    // let depth = 1
    // let max = 0

    // let arrayOfArray = arr.filter( a => Array.isArray(a))

    // if( arrayOfArray.length) {
    //   arrayOfArray.forEach(item => Math.max(this.calculateDepth(item), max))
      
    // }

    // return depth + max 
    // // for( let i = 0; i < arr.length; i++) {

    // // }
    
  }
}

module.exports = {
  DepthCalculator
};
