# leven-match

[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![](https://data.jsdelivr.com/v1/package/npm/leven-match/badge?style=rounded)](https://www.jsdelivr.com/package/npm/leven-match)
[![MIT License][license-image]][license-url]
[![Build Status][build-image]][build-url]
[![JavaScript Style Guide][standardjs-image]][standardjs-url]

Return all word matches between two arrays within given Levenshtein distance.

Intended use is to return all words in a query that has matches in an index within a given Levenshtein distance. Good for autocomplete type functionality, and in some cases also searching.

Part of [daq-proc](https://github.com/eklem/daq-proc) - Simple document and query processing for offline-first search.

## Breaking change

Importing/requiring script has changed slightly for CJS and ESM. UMD is as it was.

## Initiating

### UMD -  Universal module definition/browser
```javaScript
<script src="https://cdn.jsdelivr.net/npm/leven-match/dist/leven-match.umd.min.js"></script>
// lvm.levenMatch available
```

### CJS - CommonJS

```javaScript
const { levenMatch } = require('leven-match')
// levenMatch available
```

### ESM - Ecmascript module

```javaScript
import { levenMatch } from 'leven-match'
// levenMatch available
```


## Use

```javaScript
<script>
  const index = ['return', 'all', 'word', 'matches', 'between', 'two', 'arrays', 'within', 'given', 'levenshtein', 'distance', 'intended', 'use', 'is', 'to', 'words', 'in', 'a', 'query', 'that', 'has', 'an', 'index', 'good', 'for', 'autocomplete', 'type', 'functionality,', 'and', 'some', 'cases', 'also', 'searching']
  const query = ['qvery', 'words', 'levensthein']

  levenMatch(query, index, {distance: 2})
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
[build-url]: https://github.com/eklem/leven-match/actions/workflows/tests.yml
[build-image]: https://github.com/eklem/leven-match/actions/workflows/tests.yml/badge.svg
[standardjs-url]: https://standardjs.com
[standardjs-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
