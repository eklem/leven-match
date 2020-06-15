const leven = require('leven')

let index = ['return', 'all', 'word', 'matches', 'between', 'two', 'arrays']
let query = ['words', 'matches']
let queryWord = 'wor'
let distance = 2

// const levenMatch = function (queryArr, matchToArr, distance) {
// }

// .map.filter

const result = index.filter(indexWord => leven(indexWord, queryWord) <= distance )
console.log(result)


// if (index.some(indexWord => leven(indexWord, queryWord) <= distance )) {
//   return
// }




// module.exports = {
//   levenMatch: levenMatch
// }