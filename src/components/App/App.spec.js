import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Profile from "../Profile/Profile";

describe("App", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<App />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render the profile component", () => {
    expect(wrapper.containsMatchingElement(<Profile />)).toEqual(true);
  });
});
