import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";

import "@testing-library/jest-dom/extend-expect";

import App from "./App";

test("full app rendering/navigating", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  // verify page content for expected route
  // often you'd use a data-testid or role query, but this is also possible
  expect(screen.getByText(/Michelangelo/i)).toBeInTheDocument();

  const leftClick = { button: 0 };
  userEvent.click(screen.getByText(/Login/i));

  // check that the content changed to the new page
  expect(screen.getByText(/Sign In/i)).toBeInTheDocument();
});
