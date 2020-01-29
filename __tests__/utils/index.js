import { shallow } from "enzyme";
import checkPropTypes from "check-prop-types";

/**
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @param {object} state
 * @returns {ShallowWrapper}
 */
const setup = (Component, props = {}, state = null) => {
  const wrapper = shallow(<Component {...props} />);
  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @function findByTestAttribute
 * @param {*} wrapper - Enzyme shallow wrapper to search within
 * @param {*} value - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
const findByTestAttribute = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`);
};

const checkProps = (Component, props) => {
  const propError = checkPropTypes(
    Component.propTypes,
    props,
    "prop",
    Component.name
  );
  expect(propError).toBeUndefined();
};

export { setup, findByTestAttribute, checkProps };
