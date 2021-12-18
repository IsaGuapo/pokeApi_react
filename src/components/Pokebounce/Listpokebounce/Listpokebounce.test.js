import React from "react";
import { shallow } from "enzyme";
import Listpokebounce from "./Listpokebounce";

describe("Listpokebounce", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Listpokebounce />);
    expect(wrapper).toMatchSnapshot();
  });
});
