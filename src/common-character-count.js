const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  throw new NotImplementedError('Not implemented');
  // let result = 0
  // let newS1 = new Set([...s1])
  // let newS2 = new Set([...s2])
  // for (let i = 0; i < newS1.length; i++) {
  //   if( newS2.includes(newS1[i])){
  //     result++
  //   }
  //   // for (let j = 0; j < s2.length; j++){
  //   //   if(s1[i] === s2[j]){
  //   //     result++
  //   //   }
  //   // }
  // }
  // return result
  
}

module.exports = {
  getCommonCharacterCount
};
