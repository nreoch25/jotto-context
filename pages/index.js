import React, { Component } from "react";
import Congrats from "../components/Congrats";
import GuessedWords from "../components/GuessedWords";

class IndexPage extends Component {
  render() {
    return (
      <div data-test="component-index-page" className="container">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessedWords
          guessedWords={[
            { guessedWord: "train", letterMatchCount: 3 },
            { guessedWord: "agile", letterMatchCount: 1 },
            { guessedWord: "party", letterMatchCount: 5 }
          ]}
        />
      </div>
    );
  }
}

export default IndexPage;
