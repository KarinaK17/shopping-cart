import { render, screen } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
// import Nav from "./components/Nav";
// import Home from "./components/Home";
// import Shop from "./components/Shop";
import App from "./App";

describe("App component", () => {
  it("renders correctly", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
