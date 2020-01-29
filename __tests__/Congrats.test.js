import Congrats from "../components/Congrats";
import { setup, findByTestAttribute, checkProps } from "./utils";

describe("Congrats Component", () => {
  test("renders without error", () => {
    const wrapper = setup(Congrats, { success: false });
    const component = findByTestAttribute(wrapper, "component-congrats");
    expect(component.length).toBe(1);
  });
  test("renders no text when `success` prop is false", () => {
    const wrapper = setup(Congrats, { success: false });
    const component = findByTestAttribute(wrapper, "component-congrats");
    expect(component.text()).toBe("");
  });
  test("renders non-empty congrats message when `success` prop is true", () => {
    const wrapper = setup(Congrats, { success: true });
    const message = findByTestAttribute(wrapper, "congrats-message");
    expect(message.text().length).not.toBe(0);
  });
  test("does not throw warning with expected props", () => {
    const expectedProps = { success: false };
    checkProps(Congrats, expectedProps);
  });
});
