(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.lvm = {}));
})(this, (function (exports) { 'use strict';

	const array = [];
	const characterCodeCache = [];

	function leven(first, second) {
		if (first === second) {
			return 0;
		}

		const swap = first;

		// Swapping the strings if `a` is longer than `b` so we know which one is the
		// shortest & which one is the longest
		if (first.length > second.length) {
			first = second;
			second = swap;
		}

		let firstLength = first.length;
		let secondLength = second.length;

		// Performing suffix trimming:
		// We can linearly drop suffix common to both strings since they
		// don't increase distance at all
		// Note: `~-` is the bitwise way to perform a `- 1` operation
		while (firstLength > 0 && (first.charCodeAt(~-firstLength) === second.charCodeAt(~-secondLength))) {
			firstLength--;
			secondLength--;
		}

		// Performing prefix trimming
		// We can linearly drop prefix common to both strings since they
		// don't increase distance at all
		let start = 0;

		while (start < firstLength && (first.charCodeAt(start) === second.charCodeAt(start))) {
			start++;
		}

		firstLength -= start;
		secondLength -= start;

		if (firstLength === 0) {
			return secondLength;
		}

		let bCharacterCode;
		let result;
		let temporary;
		let temporary2;
		let index = 0;
		let index2 = 0;

		while (index < firstLength) {
			characterCodeCache[index] = first.charCodeAt(start + index);
			array[index] = ++index;
		}

		while (index2 < secondLength) {
			bCharacterCode = second.charCodeAt(start + index2);
			temporary = index2++;
			result = index2;

			for (index = 0; index < firstLength; index++) {
				temporary2 = bCharacterCode === characterCodeCache[index] ? temporary : temporary + 1;
				temporary = array[index];
				// eslint-disable-next-line no-multi-assign
				result = array[index] = temporary > result ? (temporary2 > result ? result + 1 : temporary2) : (temporary2 > temporary ? temporary + 1 : temporary2);
			}
		}

		return result;
	}

	const defaultProperties = { distance: 1 };

	const levenMatch = function (query, index, properties) {
	  properties = {
	    ...defaultProperties,
	    ...properties
	  };
	  if (!Array.isArray(query) || !Array.isArray(index)) ; else {
	    // .map all query words and .filter on levenshtein matches in all index words
	    const matchedQuery = query.map(queryWord => index.filter(indexWord => leven(indexWord, queryWord) <= properties.distance));
	    return matchedQuery
	  }
	};

	exports.levenMatch = levenMatch;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
