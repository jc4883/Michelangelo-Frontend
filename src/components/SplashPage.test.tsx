import React from "react";
import { render } from "@testing-library/react";
import SplashPage from "./SplashPage";

test("renders Michelangelo brand", () => {
  const { getByText } = render(<SplashPage />);
  const linkElement = getByText(/Michelangelo/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders login button", () => {
  const { getByText } = render(<SplashPage />);
  const linkElement = getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});
