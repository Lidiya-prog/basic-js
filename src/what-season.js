const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if( !arguments.length ){
    return 'Unable to determine the time of year!'
  }
  if( Object.prototype.toString.call(date) !== '[object Date]' ||
    Object.getOwnPropertySymbols(date).length !== 0 ){
    throw new Error('Invalid date!')
  }
  if( typeof date === 'string' ){
    throw new Error('Invalid date!')
  }

  let dateCurr = date.getMonth()
  if( dateCurr <= 1 || dateCurr === 11 ){
    return'winter'
  } else if ( dateCurr > 1 && dateCurr <= 4 ){
    return 'spring'
  } else if ( dateCurr > 4 && dateCurr <= 7 ){
    return 'summer'
  } else {
    return 'autumn'
  }

}

module.exports = {
  getSeason
};
