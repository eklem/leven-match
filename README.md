# leven-match
Return all word matches between two arrays within given Levenshtein distance.

Intended use is to return all words in a query that has matches in an index within a given Levenshtein distance. Good for autocomplete type functionality, and in some cases also searching.

[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]
[![Build Status][travis-image]][travis-url]
[![JavaScript Style Guide][standardjs-image]][standardjs-url]

## Use
```javaScript
const lvm = require('../index.js')
const index = ['return', 'all', 'word', 'matches', 'between', 'two', 'arrays', 'within', 'given', 'levenshtein', 'distance', 'intended', 'use', 'is', 'to', 'words', 'in', 'a', 'query', 'that', 'has', 'an', 'index', 'good', 'for', 'autocomplete', 'type', 'functionality,', 'and', 'some', 'cases', 'also', 'searching']
const query = ['qvery', 'words', 'levensthein']

lvm.levenMatch(query, index, {distance: 2})
//[ [ 'query' ], [ 'word', 'words' ], [ 'levenshtein' ] ]
```

Returns an array of arrays. One sub-array for each query word.


[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE
[npm-url]: https://npmjs.org/package/leven-match
[npm-version-image]: https://img.shields.io/npm/v/leven-match.svg?style=flat
[npm-downloads-image]: https://img.shields.io/npm/dm/leven-match.svg?style=flat
[travis-url]: https://travis-ci.org/eklem/leven-match
[travis-image]: https://img.shields.io/travis/eklem/leven-match.svg?style=flat
[standardjs-url]: https://standardjs.com
[standardjs-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square