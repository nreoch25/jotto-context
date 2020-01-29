import React, { Fragment } from "react";
import hookActions from "../actions/hookActions";
import Input from "../components/Input";
// import Congrats from "../components/Congrats";
// import GuessedWords from "../components/GuessedWords";

const reducer = (state, action) => {
  switch (action.type) {
    case "setSecretWord":
      return { ...state, secretWord: action.payload };
    default:
      return state;
  }
};

const IndexPage = () => {
  const [state, dispatch] = React.useReducer(reducer, { secretWord: null });
  const setSecretWord = secretWord => {
    dispatch({ type: "setSecretWord", payload: secretWord });
  };
  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);
  return (
    <Fragment>
      {!state.secretWord && (
        <div className="container" data-test="spinner">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      {state.secretWord && (
        <div data-test="component-index-page" className="container">
          <h1>Jotto</h1>
          <Input secretWord={state.secretWord} />
        </div>
      )}
    </Fragment>
  );
};

export default IndexPage;
