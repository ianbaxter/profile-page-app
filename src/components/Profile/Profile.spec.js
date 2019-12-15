import React from "react";
import { shallow } from "enzyme";
import Profile from "./Profile";
import Header from "../Header/Header";
import Bio from "../Bio/Bio";
import Friends from "../Friends/Friends";

describe("Profile", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Profile />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render the Header, Bio and Friends component", () => {
    expect(
      wrapper.containsAllMatchingElements([<Header />, <Bio />, <Friends />])
    ).toEqual(true);
  });
});
