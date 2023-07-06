// Using built-in toLowerCase() function
function compareStrings(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}

// Custom implementation 
function compareStringsCustom(str1, str2) {
  const formattedStr1 = str1.toLowerCase();
  const formattedStr2 = str2.toLowerCase();

  if (formattedStr1.length !== formattedStr2.length) {
    return false;
  }

  for (let i = 0; i < formattedStr1.length; i++) {
    const char1 = formattedStr1[i];
    const char2 = formattedStr2[i];

    if (char1 !== ' ' && char1 !== char2) {
      return false;
    }
  }

  return true;
}

module.exports = {
  compareStrings,
  compareStringsCustom
};
