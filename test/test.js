const test = require('tape')
const lvm = require('../index.js')
const index = ['return', 'all', 'word', 'matches', 'between', 'two', 'arrays', 'within', 'given', 'levenshtein', 'distance', 'intended', 'use', 'is', 'to', 'words', 'in', 'a', 'query', 'that', 'has', 'an', 'index', 'good', 'for', 'autocomplete', 'type', 'functionality,', 'and', 'some', 'cases', 'also', 'searching']
const query = ['qvery', 'words', 'levensthein']
const queryNotArray = 'some string'

test('match without setting distance, setting custom distance and inputting a string istead of an array', function (t) {
  t.plan(3)

  // Standard distance
  let matched = lvm.levenMatch(query, index)
  t.deepEqual(matched, [['query'], ['word', 'words'], []])

  // Distance set to 2
  matched = lvm.levenMatch(query, index, { distance: 2 })
  t.deepEqual(matched, [['query'], ['word', 'words'], ['levenshtein']])

  // query input not an array
  matched = lvm.levenMatch(queryNotArray, index)
  t.deepEqual(matched, undefined)
})
