import toJson from "enzyme-to-json";
import IndexPage from "../pages/index";
import { setup, findByTestAttribute } from "./utils";

describe("Index Page", () => {
  it("matches the snapshot", () => {
    const wrapper = setup(IndexPage);
    const appComponent = findByTestAttribute(wrapper, "component-index-page");
    expect(appComponent.length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
