/* Write a program which accepts as input two arbitrarily nested arrays of strings.
Ir should return the sum of the number of necessary one character substitutions
multiplied by 2 to the power of the depth of nesting at which substitution must occur

For example:

yourFunction(
["I", ["love"], [[["awesome", "shiny"]]], "drones"],
["I", ["hate"], [[["magenta", "dirty"]]], "drains"]
)

should return 2(3) + 8(7 + 4) + 3 = 97
*/

function myFunction(arr1, arr2) {
  if (!checkIfBothArrays(arr1, arr2) && !checkLengthsMatch(arr1, arr2)) return -1;

  let total = 0;
  let diffCount = 0;
  let nestLevel = 0;

  let check = worldsWorstFunction(arr1, arr2);

  if (check === -1) return -1;

  return total;

  function worldsWorstFunction(arg1, arg2) {
    if (!checkIfBothArrays(arg1, arg2)) {
      if (!checkLengthsMatch(arg1, arg2) || !checkIfBothStrings(arg1, arg2)) return -1;
      diffCount = compareStrings(arg1, arg2);
      total += diffCount * Math.pow(2, nestLevel);
    } else {
      nestLevel++;
      if (!checkLengthsMatch(arg1, arg2)) return -1;
      for (let i = 0; i < arg1.length; i++) {
        worldsWorstFunction(arg1[i], arg2[i]);
      }
    }
  }

  function compareStrings(str1, str2) {
    if (str1.length !== str2.length) return -1;
    let diffCharCount = 0;
    for (let i = 0; i < str1.length; i++) if (str1[i] !== str2[i]) diffCharCount++;
    return diffCharCount;
  }

  function checkLengthsMatch(arg1, arg2) {
    return arg1.length === arg2.length;
  }

  function checkIfBothArrays(arg1, arg2) {
    return Array.isArray(arg1) && Array.isArray(arg2);
  }

  function checkIfBothStrings(arg1, arg2) {
    return typeof arg1 === 'string' && typeof arg2 === 'string';
  }
}

module.exports = myFunction;
