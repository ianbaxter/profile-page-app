import React from "react";
import { shallow } from "enzyme";
import Profile from "./Profile";
import Header from "../Header/Header";
import Bio from "../Bio/Bio";

describe("Profile", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Profile />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  //   it("should render the Header and Bio component", () => {
  //     expect(
  //       wrapper.containsAllMatchingElements(
  //         <Header loginHistory={wrapper.instance().state.loginHistory} />,
  //         <Bio
  //           dateOfBirth={wrapper.instance().state.dateOfBirth}
  //           favActivity={wrapper.instance().state.favActivity}
  //           favColor={wrapper.instance().state.favColor}
  //         />
  //       )
  //     ).toEqual(true);
  //   });
});
