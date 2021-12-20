import React from "react";
import { shallow } from "enzyme";
import Cardpokebounce from "./Cardpokebounce";

describe("Cardpokebounce", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Cardpokebounce />);
    expect(wrapper).toMatchSnapshot();
  });
});
