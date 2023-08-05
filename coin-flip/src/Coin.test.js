import React from "react";
import { render } from "@testing-library/react";
import Coin from "./Coin";

test("renders Card component", () => {
  render(<Coin />);
});

test("matches snapshot", function () {
  const { asFragment } = render(<Coin />);
  expect(asFragment()).toMatchSnapshot();
});
