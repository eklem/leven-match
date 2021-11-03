const test = require('ava')
const { levenMatch } = require('../dist/leven-match.cjs.js')
const index = ['return', 'all', 'word', 'matches', 'between', 'two', 'arrays', 'within', 'given', 'levenshtein', 'distance', 'intended', 'use', 'is', 'to', 'words', 'in', 'a', 'query', 'that', 'has', 'an', 'index', 'good', 'for', 'autocomplete', 'type', 'functionality,', 'and', 'some', 'cases', 'also', 'searching']
const query = ['qvery', 'words', 'levensthein']
const notAnArray = 'some string'

test('match without setting distance, setting custom distance and inputting a string istead of an array', (t) => {
  // Standard distance
  let matched = levenMatch(query, index)
  t.deepEqual(matched, [['query'], ['word', 'words'], []])

  // Distance set to 2
  matched = levenMatch(query, index, { distance: 2 })
  t.deepEqual(matched, [['query'], ['word', 'words'], ['levenshtein']])

  // query input not an array
  matched = levenMatch(notAnArray, index)
  t.deepEqual(matched, undefined)

  // index input not an array
  matched = levenMatch(query, notAnArray)
  t.deepEqual(matched, undefined)
})
