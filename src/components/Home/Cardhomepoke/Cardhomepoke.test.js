import React from "react";
import { shallow } from "enzyme";
import Cardhomepoke from "./Cardhomepoke";

describe("Cardhomepoke", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Cardhomepoke />);
    expect(wrapper).toMatchSnapshot();
  });
});
