/**
 * @method getLetterMatchCount
 * @param {string} guessedWord
 * @param {string} secretWord
 * @returns {number} - Number of matching letters
 */
const getLetterMatchCount = (guessedWord, secretWord) => {
  const secretLetterSet = new Set(secretWord.split(""));
  const guessedWordSet = new Set(guessedWord.split(""));
  return [...secretLetterSet].filter(letter => guessedWordSet.has(letter))
    .length;
};

export { getLetterMatchCount };
