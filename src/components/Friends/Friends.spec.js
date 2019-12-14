import React from "react";
import { shallow } from "enzyme";
import Friends from "./Friends";

describe("Friends", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Friends>friendsList={[]}</Friends>)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render the friendsList array", () => {
    wrapper.setProps({ friendsList: ["Dom"] });
    expect(wrapper.find(".friends-list").text()).toEqual("Dom");
  });
});
