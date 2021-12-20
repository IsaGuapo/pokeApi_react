import React from "react";
import { shallow } from "enzyme";
import Cardpoke from "./Cardpoke";

describe("Cardpoke", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Cardpoke />);
    expect(wrapper).toMatchSnapshot();
  });
});
