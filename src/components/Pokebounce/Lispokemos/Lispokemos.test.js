import React from "react";
import { shallow } from "enzyme";
import Lispokemos from "./Lispokemos";

describe("Lispokemos", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Lispokemos />);
    expect(wrapper).toMatchSnapshot();
  });
});
