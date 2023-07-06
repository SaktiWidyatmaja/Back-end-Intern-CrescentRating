const { mergeLists, mergeListsCustom } = require('./mergeList');
const { alternateMerge, alternateMergeCustom } = require('./alternateMerge');
const { compareStrings, compareStringsCustom } = require('./stringComparison');
const { separateWord, separateWordCustom } = require('./separateWord');

// Merge Two Lists
const merged1 = mergeLists(['a', 'b', 'c'], [1, 2, 3]);
console.log(merged1); // Output: ['a', 'b', 'c', 1, 2, 3]

const merged2 = mergeListsCustom(['a', 'b', 'c'], [1, 2, 3]);
console.log(merged2); // Output: ['a', 'b', 'c', 1, 2, 3]


// Alternate Merge
const alternateMerged1 = alternateMerge(['a', 'b', 'c'], [1, 2, 3]);
console.log(alternateMerged1); // Output: ['a', 1, 'b', 2, 'c', 3]

const alternateMerged2 = alternateMergeCustom(['a', 'b', 'c'], [1, 2, 3]);
console.log(alternateMerged2); // Output: ['a', 1, 'b', 2, 'c', 3]


// String Comparison
const str1 = "I like to drink water";
const str2 = "I Like To Drink Water";

const isSameValue1 = compareStrings(str1, str2);
console.log(isSameValue1); // Output: true

const isSameValue2 = compareStringsCustom(str1, str2);
console.log(isSameValue2); // Output: true


// Separate Word
const sentence1 = "One of the recommended food from japan is Sushi";
const sentence2 = "Indonesian doesn’t eat Sushi";

const separatedWord1 = separateWord(sentence1, "Sushi");
console.log(separatedWord1); // Output: "Sushi"

const separatedWord2 = separateWordCustom(sentence2, "Sushi");
console.log(separatedWord2); // Output: "Sushi"
