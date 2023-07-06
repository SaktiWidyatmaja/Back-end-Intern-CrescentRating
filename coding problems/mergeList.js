// Using built-in concat() function
function mergeLists(arr1, arr2) {
  return arr1.concat(arr2);
}

// Custom implementation
function mergeListsCustom(arr1, arr2) {
  const merged = [...arr1, ...arr2];
  return merged;
}

module.exports = {
  mergeLists,
  mergeListsCustom
};
