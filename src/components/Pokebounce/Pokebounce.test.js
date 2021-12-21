import React from "react";
import { shallow } from "enzyme";
import Pokebounce from "./Pokebounce";

describe("Pokebounce", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Pokebounce />);
    expect(wrapper).toMatchSnapshot();
  });
});
