const leven = require('leven')
const defaultProperties = { distance: 1 }

const levenMatch = function (query, index, properties) {
  properties = {
    ...defaultProperties,
    ...properties
  }
  if (!Array.isArray(query) || !Array.isArray(index)) {
    console.log('query and index should be an array')
  } else {
    // .map all query words and .filter on levenshtein matches in all index words
    const matchedQuery = query.map(queryWord => index.filter(indexWord => leven(indexWord, queryWord) <= properties.distance))
    return matchedQuery
  }
}

module.exports = {
  levenMatch: levenMatch
}
