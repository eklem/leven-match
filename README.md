# leven-match
Return all word matches between two arrays within given Levenshtein distance.

Intended use is to return all words in a query that has matches in an index within a given Levenshtein distance. Good for autocomplete type functionality, and in some cases also searching.

## Use
```javaScript
const lvm = require('../index.js')
const index = ['return', 'all', 'word', 'matches', 'between', 'two', 'arrays', 'within', 'given', 'levenshtein', 'distance', 'intended', 'use', 'is', 'to', 'words', 'in', 'a', 'query', 'that', 'has', 'an', 'index', 'good', 'for', 'autocomplete', 'type', 'functionality,', 'and', 'some', 'cases', 'also', 'searching']
const query = ['qvery', 'words', 'levensthein']

lvm.levenMatch(query, index, {distance: 2})
//[ [ 'query' ], [ 'word', 'words' ], [ 'levenshtein' ] ]
```

Returns an array of arrays. One sub-array for each query word.