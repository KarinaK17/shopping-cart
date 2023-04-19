import { render } from "@testing-library/react";
import React from "react";
import ProductCard from "../ProductCard";

describe("ProductCard component", () => {
  it("renders correctly (if quantity is 0, card renders with cart)", () => {
    const { container } = render(<ProductCard quantity={0} />);
    expect(container).toMatchSnapshot();
  });

  it("renders correctly (if quantity is bigger than 0, card renders with input)", () => {
    const { container } = render(<ProductCard quantity={1} />);
    expect(container).toMatchSnapshot();
  });
});
