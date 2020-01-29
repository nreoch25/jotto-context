import React from "react";
import Input from "../components/Input";
import { setup, findByTestAttribute, checkProps } from "./utils";

describe("Input", () => {
  test("renders without error", () => {
    const wrapper = setup(Input, { secretWord: "party" });
    const component = findByTestAttribute(wrapper, "component-input");
    expect(component.length).toBe(1);
  });
  test("does not throw warning with expected props", () => {
    const expectedProps = { secretWord: "party" };
    checkProps(Input, expectedProps);
  });
});
describe("state controlled input", () => {
  let mockSetCurrentGuess = jest.fn();
  let wrapper;
  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setup(Input, { secretWord: "party" });
  });
  test("state updates with value of input on change", () => {
    const inputBox = findByTestAttribute(wrapper, "input-box");
    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith(mockEvent.target.value);
  });
  test("clicking submit clears currentGuess state", () => {
    const submitButton = findByTestAttribute(wrapper, "submit-button");
    submitButton.simulate("click", { preventDefault() {} });
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});
