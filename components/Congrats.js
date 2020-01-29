import React, { Fragment } from "react";
import PropTypes from "prop-types";

/**
 * Functional React component for congratulatory message
 * @function
 * @param {object} props - React Props
 * @returns {JSX.Element}
 */
const Congrats = ({ success }) => {
  return (
    <Fragment>
      {success && (
        <div data-test="component-congrats" className="alert alert-success">
          <span data-test="congrats-message">
            Congratulations, You guessed the word
          </span>
        </div>
      )}
      {!success && <div data-test="component-congrats"></div>}
    </Fragment>
  );
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};

export default Congrats;
