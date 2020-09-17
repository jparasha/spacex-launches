import { mount } from "enzyme";
import styles from "../../../styles/Home.module.css";
import HomePage from "../../../Components/HomePage";

/** @test {HomePage Component} */
describe("HomePage Component", () => {
  it("should render without crashing", () => {
    const wrapper = mount(<HomePage styles={styles} />);
    expect(wrapper.find("h1")).toHaveLength(1);
    expect(wrapper.find("p")).toHaveLength(1);
  });
});
