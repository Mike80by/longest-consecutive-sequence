module.exports = function longestConsecutiveLength(array) {
  let maxLen = 0;
  let count = 0;
  if (array.length === 0) return 0;
  array.sort(function(a, b) {
  	return a - b;
  });
  for (let i = 0, len = array.length; i < len; i++) {
  	if (array[i] === array[i - 1]) continue;
  	if (array[i] - 1 === array[i - 1]) {
  		count++;
  	} else count = 1;
  	maxLen = Math.max(maxLen, count);
  }
  return maxLen;
}