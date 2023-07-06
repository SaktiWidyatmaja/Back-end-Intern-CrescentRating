// Using built-in flat() and map() functions
function alternateMerge(arr1, arr2) {
  const merged = arr1.flatMap((val, i) => [val, arr2[i]]);
  return merged;
}

// Custom implementation
function alternateMergeCustom(arr1, arr2) {
  const merged = [];
  const maxLength = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < maxLength; i++) {
    if (arr1[i] !== undefined) {
      merged.push(arr1[i]);
    }
    if (arr2[i] !== undefined) {
      merged.push(arr2[i]);
    }
  }

  return merged;
}

module.exports = {
  alternateMerge,
  alternateMergeCustom
};
