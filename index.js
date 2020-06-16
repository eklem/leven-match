const leven = require('leven')
const defaultProperties =  {distance: 1}

const levenMatch = function (query, index, properties) {
  properties = {
    ...defaultProperties,
    ...properties
  }
  // .map all query words and .filter on levenshtein matches in all index words
  const matchedQuery = query.map(queryWord => index.filter(indexWord => leven(indexWord, queryWord) <= properties.distance))
  return matchedQuery
}

module.exports = {
  levenMatch: levenMatch
}