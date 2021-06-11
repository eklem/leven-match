var leven$2 = {exports: {}};

const array = [];
const charCodeCache = [];

const leven$1 = (left, right) => {
	if (left === right) {
		return 0;
	}

	const swap = left;

	// Swapping the strings if `a` is longer than `b` so we know which one is the
	// shortest & which one is the longest
	if (left.length > right.length) {
		left = right;
		right = swap;
	}

	let leftLength = left.length;
	let rightLength = right.length;

	// Performing suffix trimming:
	// We can linearly drop suffix common to both strings since they
	// don't increase distance at all
	// Note: `~-` is the bitwise way to perform a `- 1` operation
	while (leftLength > 0 && (left.charCodeAt(~-leftLength) === right.charCodeAt(~-rightLength))) {
		leftLength--;
		rightLength--;
	}

	// Performing prefix trimming
	// We can linearly drop prefix common to both strings since they
	// don't increase distance at all
	let start = 0;

	while (start < leftLength && (left.charCodeAt(start) === right.charCodeAt(start))) {
		start++;
	}

	leftLength -= start;
	rightLength -= start;

	if (leftLength === 0) {
		return rightLength;
	}

	let bCharCode;
	let result;
	let temp;
	let temp2;
	let i = 0;
	let j = 0;

	while (i < leftLength) {
		charCodeCache[i] = left.charCodeAt(start + i);
		array[i] = ++i;
	}

	while (j < rightLength) {
		bCharCode = right.charCodeAt(start + j);
		temp = j++;
		result = j;

		for (i = 0; i < leftLength; i++) {
			temp2 = bCharCode === charCodeCache[i] ? temp : temp + 1;
			temp = array[i];
			// eslint-disable-next-line no-multi-assign
			result = array[i] = temp > result ? temp2 > result ? result + 1 : temp2 : temp2 > temp ? temp + 1 : temp2;
		}
	}

	return result;
};

leven$2.exports = leven$1;
// TODO: Remove this for the next major release
leven$2.exports.default = leven$1;

const leven = leven$2.exports;
const defaultProperties = { distance: 1 };

const levenMatch = function (query, index, properties) {
  properties = {
    ...defaultProperties,
    ...properties
  };
  if (!Array.isArray(query) || !Array.isArray(index)) {
    console.log('query and index should be an array');
  } else {
    // .map all query words and .filter on levenshtein matches in all index words
    const matchedQuery = query.map(queryWord => index.filter(indexWord => leven(indexWord, queryWord) <= properties.distance));
    return matchedQuery
  }
};

var src = {
  levenMatch: levenMatch
};

export default src;
