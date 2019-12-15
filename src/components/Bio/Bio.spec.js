import React from "react";
import { shallow } from "enzyme";
import Bio from "./Bio";

describe("Bio", () => {
  let wrapper;

  beforeEach(
    () =>
      (wrapper = shallow(
        <Bio>
          dateOfBirth={""}
          favActivity={""}
          favColor={""}
          updateFavColor={jest.fn()}
        </Bio>
      ))
  );

  it("should render multiple <div />", () => {
    expect(wrapper.find("div").length).toEqual(5);
  });

  it("renders the dateOfBirth", () => {
    wrapper.setProps({ dateOfBirth: "01/01/1990" });
    expect(wrapper.find("#bio-birth-text").text()).toEqual("01/01/1990");
  });
});
