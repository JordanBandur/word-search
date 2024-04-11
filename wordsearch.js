// 2D matrix of letters and a word
// Check to find the word horizonatally and vertically
// return true if found, false if not found
// Don't worry about if the word is written backwards or diagonally

const wordSearch = (letters, word) => {
  if (!letters.length) return false;

  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word) || l.split('').reverse().join('').includes(word)) return true;
  }

  const transpose = letters => letters[0].map((col, i) => letters.map(row => row[i])); // using letters[0].map((col, i) we can get the number of columns by starting at [0]
  const transposedLetters = transpose(letters); // transpose the letters array so that each
  // column is converted into a row

  const verticalJoin = transposedLetters.map(ls => ls.join(""));
  for (const l of verticalJoin) {
    if (l.includes(word) || l.split('').reverse().join('').includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;