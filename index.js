const myFunction = (arr1, arr2) => {
  let total = 0;

  worldsWorstFunction(arr1, arr2, -1);

  return total;

  function worldsWorstFunction(arg1, arg2, nestLvl) {
    if (checkIfBothArrays(arg1, arg2)) {
      if (!checkLengthsMatch(arg1, arg2)) total = -1;
      nestLvl++;
      for (let i = 0; i < arg1.length; i++) {
        if (total === -1) break;
        worldsWorstFunction(arg1[i], arg2[i], nestLvl);
      }
    } else if (checkIfBothStrings(arg1, arg2)) {
      if (!checkLengthsMatch(arg1, arg2)) total = -1;
      else {
        let diffCount = compareStrings(arg1, arg2);
        total += diffCount * Math.pow(2, nestLvl);
      }
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
