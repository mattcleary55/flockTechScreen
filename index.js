/*
  This program accepts as input two arbitrarily nested arrays of strings.
  It returns the sum of the number of necessary one character substitutions
  multiplied by 2 to the power of the depth of nesting at which substitution must occur
*/

const myFunction = (arr1, arr2) => {
  let total = 0;

  /* Third parameter is the level of nesting.
  It begins at -1 as initially, this function will call itself before diving deeper into the array.*/
  worldsWorstFunction(arr1, arr2, -1);

  return total;

  /* This function uses recursion to simulatenously work through the arrays.
  If an element is an array itself, it will call itself and dive deeper
  into the nested array. If the arguments aren't both strings or arrays OR
  their lengths don't match, the fail condition will be set: total = -1
  */
  function worldsWorstFunction(arg1, arg2, nestLvl) {
    if (checkIfBothArrays(arg1, arg2) && checkLengthsMatch(arg1, arg2)) {
      // As array nesting will deepen, increment nestLvl, ready for next call
      nestLvl++;
      for (let i = 0; i < arg1.length; i++) {
        if (total === -1) break;
        worldsWorstFunction(arg1[i], arg2[i], nestLvl);
      }
    } else if (checkIfBothStrings(arg1, arg2) && checkLengthsMatch(arg1, arg2)) {
      // Count how many character substitutions are needed to match strings
      let diffCount = compareStrings(arg1, arg2);
      // Multiply the number of character subtitutions by 2 to the power of the depth of nesting
      // then add to total
      total += diffCount * Math.pow(2, nestLvl);
    } else total = -1;
  }
};

const compareStrings = (str1, str2) => {
  if (str1.length !== str2.length) return -1;
  let diffCharCount = 0;
  for (let i = 0; i < str1.length; i++) if (str1[i] !== str2[i]) diffCharCount++;
  return diffCharCount;
};

const checkLengthsMatch = (arg1, arg2) => arg1.length === arg2.length;

const checkIfBothArrays = (arg1, arg2) => Array.isArray(arg1) && Array.isArray(arg2);

const checkIfBothStrings = (arg1, arg2) => typeof arg1 === 'string' && typeof arg2 === 'string';

module.exports = myFunction;
