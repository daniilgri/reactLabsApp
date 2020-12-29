import React from "react";
import renderer from "react-test-renderer";

import component from "./component";

describe("Board component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<component />)

      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
