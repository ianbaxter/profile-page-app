import React from "react";
import { shallow } from "enzyme";
import Friends from "./Friends";

describe("Friends", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Friends friendsList={[]} />)));

  it("should render multiple <div />", () => {
    expect(wrapper.find("div").length).toEqual(3);
  });

  it("should render the friendsList array", () => {
    wrapper.setProps({ friendsList: ["Saul"] });
    expect(wrapper.find(".friends-list-container").text()).toEqual("Saul");
  });
});
