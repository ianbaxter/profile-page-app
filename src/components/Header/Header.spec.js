import React from "react";
import { shallow, mount } from "enzyme";
import Header from "./Header";

describe("Header", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Header loginHistory={[]} />)));

  it("should render multiple <div />", () => {
    expect(wrapper.find("div").length).toEqual(4);
  });
});

describe("mounted Header", () => {
  let wrapper;

  beforeEach(() => (wrapper = mount(<Header loginHistory={[]} />)));

  it("renders the value of loginHistory", () => {
    wrapper.setProps({
      loginHistory: ["{ date: 2019-12-13 12:05, user: Ian }"]
    });
    expect(wrapper.find(".login-history-value").text()).toEqual(
      "{ date: 2019-12-13 12:05, user: Ian }"
    );
  });
});
