# leven-match
Return all word matches between two arrays within given Levenshtein distance.

Intended use is to return all words in a query that has matches in an index within a given Levenshtein distance. Good for autocomplete type functionality, and in some cases also searching.

Part of [daq-proc](https://github.com/eklem/daq-proc) - Simple document and query processing for offline-first search.

[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]
[![Build Status][travis-image]][travis-url]
[![JavaScript Style Guide][standardjs-image]][standardjs-url]

## Use
```javaScript
<script src="daq-proc.js"></script>

<script>
  // Just picking leven-match from daq-proc
  const {lvm} = dqp

  const index = ['return', 'all', 'word', 'matches', 'between', 'two', 'arrays', 'within', 'given', 'levenshtein', 'distance', 'intended', 'use', 'is', 'to', 'words', 'in', 'a', 'query', 'that', 'has', 'an', 'index', 'good', 'for', 'autocomplete', 'type', 'functionality,', 'and', 'some', 'cases', 'also', 'searching']
  const query = ['qvery', 'words', 'levensthein']

  lvm.levenMatch(query, index, {distance: 2})
  // returns:
  //[ [ 'query' ], [ 'word', 'words' ], [ 'levenshtein' ] ]
</script>
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
