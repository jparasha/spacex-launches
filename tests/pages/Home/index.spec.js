import { mount } from "enzyme";

import Home from "../../../pages/";

/** @test {Home Component} */
describe("Home Component", () => {
  it("should render without crashing", () => {
    const wrapper = mount(<Home />);
    expect(wrapper.find("h1")).toHaveLength(1);
  });
});
