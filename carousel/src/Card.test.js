import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

test("renders Card component", () => {
  render(<Card />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<Card />);
  expect(asFragment()).toMatchSnapshot();
});
