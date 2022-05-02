const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const CONST_SUBSTITUTING = 0.693;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const k = CONST_SUBSTITUTING / HALF_LIFE_PERIOD
  let ageCurr = parseFloat( sampleActivity )
  if( !ageCurr || ageCurr <= 0 || ageCurr > MODERN_ACTIVITY || typeof(sampleActivity) !== 'string'){
    return false
  }
  let result = Math.ceil( Math.log(MODERN_ACTIVITY / ageCurr) / k )
  return result
}

module.exports = {
  dateSample
};
