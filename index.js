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
  let nestLevelsArray = [];
  let substitutionCountsArray = [];

  if (!checkIfBothArrays(arr1, arr2) && !checkLengthsMatch(arr1, arr2)) return -1;

  /*
I need to:
  - to simulataenously iterate through both arrays
  - if both elements are strings but not same length, then I return -1
  - if both elements are strings and ARE the same length,
    then call compareStrings() with them and push the diffCharCount onto the substitutionCountsArray and push 0 onto nestLevelsArray
  - if both elements are arrays and same length then go inside and compareStrings,
    push the diffCharCounts on and add the level of nesting onto the nestLevelsArray
*/

  return doTheMath(nestLevelsArray, substitutionCountsArray);

  function compareStrings(str1, str2) {
    let diffCharCount = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) diffCharCount++;
    }
    return diffCharCount;
  }

  function checkLengthsMatch(arg1, arg2) {
    return arg1.length === arg2.length;
  }

  function checkIfBothArrays(arg1, arg2) {
    return Array.isArray(arg1) && Array.isArray(arg2);
  }

  function doTheMath(nestLevels, subCounts) {
    let total = 0;

    for (let i = 0; i < subCounts.length; i++) {
      let count = 0;
      if (Array.isArray(subCounts[i])) {
        subCounts[i].forEach(digit => {
          count += digit;
        });
      } else count = subCounts[i];

      total += count * Math.pow(2, nestLevels[i]);
    }

    return total;
  }
}

module.exports = myFunction;
