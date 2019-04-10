import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import renderer from "react-test-renderer";
import "react-testing-library/cleanup-after-each";

import Dashboard from "./Dashboard.js";

// Test away

afterEach(() => {
  cleanup();
  console.log(document.body.outerHTML);
});

describe("<Dashboard />", () => {
  it.skip("matches snapshot", () => {
    const tree = renderer.create(<Dashboard />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
