import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";

import "react-testing-library/cleanup-after-each";

//import Controls from "./Controls.js";
import Dashboard from "../dashboard/Dashboard.js";

// Test away!

describe("<Display />", () => {
  it("should display Unlocked and locked", () => {
    const { getByText } = render(<Dashboard />);

    getByText(/unlocked/i);

    const closeGate = getByText(/close gate/i);
    const lockButton = getByText(/lock gate/i);

    fireEvent.click(closeGate);
    fireEvent.click(lockButton);
    getByText(/locked/i);

    const unlockButton = getByText(/unlock gate/i);

    fireEvent.click(unlockButton);
    getByText(/unlocked/i);
  });

  it("should display Open and Closed", () => {
    const { getByText } = render(<Dashboard />);

    getByText(/open/i);

    const closeGate = getByText(/close gate/i);

    fireEvent.click(closeGate);
    getByText(/closed/i);

    const openGate = getByText(/open gate/i);

    fireEvent.click(openGate);
    getByText(/open/i);
  });
});
