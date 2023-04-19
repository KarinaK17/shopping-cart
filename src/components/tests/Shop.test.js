import { render, screen, act } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import Shop from "../Shop";

describe("Shop component", () => {
  it("renders correctly", () => {
    const { container } = render(<Shop />);
    expect(container).toMatchSnapshot();
  });

  it("changes cart to input if you click on cart", async () => {
    const user = userEvent.setup();
    render(<Shop />);

    const cart = screen.getByTestId("cart-0");
    await act(async () => {
      await user.click(cart);
    });

    expect(screen.queryByTestId("cart-0")).not.toBeInTheDocument();
    expect(screen.getByTestId("input-0")).toBeInTheDocument();
    expect(screen.getByTestId("input-0")).toHaveValue("1");
  });

  it("plus button works", async () => {
    const user = userEvent.setup();
    render(<Shop />);

    const cart = screen.getByTestId("cart-0");
    await act(async () => {
      await user.click(cart);
    });

    const plus = screen.getByText("+");

    await act(async () => {
      await user.click(plus);
    });

    expect(screen.queryByTestId("cart-0")).not.toBeInTheDocument();
    expect(screen.getByTestId("input-0")).toBeInTheDocument();
    expect(screen.getByTestId("input-0")).toHaveValue("2");
  });

  it("minus button works (and input changes to cart if quantity is less than 1)", async () => {
    const user = userEvent.setup();
    render(<Shop />);

    const cart = screen.getByTestId("cart-0");
    await act(async () => {
      await user.click(cart);
    });

    const minus = screen.getByText("–");

    await act(async () => {
      await user.click(minus);
    });

    expect(screen.getByTestId("cart-0")).toBeInTheDocument();
    expect(screen.queryByTestId("input-0")).not.toBeInTheDocument();
  });

  it("total sum and number of items change if you add something to the cart", async () => {
    const user = userEvent.setup();
    render(<Shop />);

    const cart = screen.getByTestId("cart-11");
    await act(async () => {
      await user.click(cart);
    });

    const plus = screen.getByText("+");

    await act(async () => {
      await user.click(plus);
    });

    expect(screen.getByTestId("input-11")).toHaveValue("2");
    expect(screen.getByTestId("number-of-items")).toHaveTextContent("2 items");
    expect(screen.getByTestId("sum-of-items")).toHaveTextContent("Total: 48 $");
  });
});
