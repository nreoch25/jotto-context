import IndexPage from "../pages/index";
import { mount } from "enzyme";
import { setup, findByTestAttribute } from "./utils";
import hookActions from "../actions/hookActions";

const mockGetSecretWord = jest.fn();

const mountSetup = (secretWord = "party") => {
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord;
  const mockUseReducer = jest.fn().mockReturnValue([{ secretWord }, jest.fn()]);
  React.useReducer = mockUseReducer;
  return mount(<IndexPage />);
};

describe("Index Page", () => {
  test("renders without error", () => {
    const wrapper = mountSetup("party");
    const component = findByTestAttribute(wrapper, "component-index-page");
    expect(component.length).toBe(1);
  });
});

describe("getSecretWord calls", () => {
  test("getSecretWord gets called on mount", () => {
    mountSetup();
    expect(mockGetSecretWord).toHaveBeenCalled();
  });
  test("secretWord does not update on App update", () => {
    const wrapper = mountSetup();
    mockGetSecretWord.mockClear();
    wrapper.setProps();
    expect(mockGetSecretWord).not.toHaveBeenCalled();
  });
});
describe("secretWord is not null", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mountSetup("party");
  });
  test("renders app when secretWord is not null", () => {
    const component = findByTestAttribute(wrapper, "component-index-page");
    expect(component.exists()).toBe(true);
  });
  test("does not render spinner when secretWord is not null", () => {
    const component = findByTestAttribute(wrapper, "spinner");
    expect(component.exists()).toBe(false);
  });
});
describe("secretWord is null", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mountSetup(null);
  });
  test("does not render app when secretWord is null", () => {
    const component = findByTestAttribute(wrapper, "component-index-page");
    expect(component.exists()).toBe(false);
  });
  test("renders spinner when secretWord is null", () => {
    const component = findByTestAttribute(wrapper, "spinner");
    expect(component.exists()).toBe(true);
  });
});
