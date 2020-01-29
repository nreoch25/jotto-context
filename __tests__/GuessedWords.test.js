import GuessedWords from "../components/GuessedWords";
import { setup, findByTestAttribute, checkProps } from "./utils";

const defaultProps = {
  guessedWords: [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "agile", letterMatchCount: 1 },
    { guessedWord: "party", letterMatchCount: 5 }
  ]
};

describe("GuessedWords - no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup(GuessedWords, { guessedWords: [] });
  });
  test("renders without error", () => {
    const component = findByTestAttribute(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
  test("renders instructions to guess a word", () => {
    const instructions = findByTestAttribute(wrapper, "guess-instructions");
    expect(instructions.text().length).not.toBe(0);
  });
  test("renders guessed words section", () => {});
  test("displays correct number of guessed words", () => {});
  test("does not throw warning with expected props", () => {
    checkProps(GuessedWords, defaultProps);
  });
});

describe("GuessedWords - words guessed", () => {
  const guessedWords = [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "agile", letterMatchCount: 1 },
    { guessedWord: "party", letterMatchCount: 5 }
  ];
  let wrapper;
  beforeEach(() => {
    wrapper = setup(GuessedWords, { guessedWords });
  });
  test("renders without error", () => {
    const component = findByTestAttribute(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
  test("renders guessed words section", () => {
    const guessedWordsNode = findByTestAttribute(wrapper, "guessed-words");
    expect(guessedWordsNode.length).toBe(1);
  });
  test("displays correct number of guessed words", () => {
    const guessedWordNodes = findByTestAttribute(wrapper, "guessed-word");
    expect(guessedWordNodes.length).toBe(guessedWords.length);
  });
  test("does not throw warning with expected props", () => {
    checkProps(GuessedWords, defaultProps);
  });
  test("does not throw warning with expected props", () => {
    checkProps(GuessedWords, defaultProps);
  });
});
