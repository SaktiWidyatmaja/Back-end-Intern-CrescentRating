// Using built-in includes() and split() functions
function separateWord(sentence, word) {
  if (sentence.includes(word)) {
    return word;
  }
  return '';
}

// Custom implementation
function separateWordCustom(sentence, word) {
  const words = sentence.split(' ');
  for (const w of words) {
    if (isWordEqual(w, word)) {
      return w;
    }
  }
  return '';
}

function isWordEqual(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }

  for (let i = 0; i < word1.length; i++) {
    if (word1[i].toLowerCase() !== word2[i].toLowerCase()) {
      return false;
    }
  }

  return true;
}

module.exports = {
  separateWord,
  separateWordCustom
};
