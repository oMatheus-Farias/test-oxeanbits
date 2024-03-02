import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import HeaderComponent from "./header.component";

describe("HeaderComponent", () => {
  it("should check if the logo is present", () => {
    render(<HeaderComponent />);

    const logoImage = screen.getByAltText("logo");

    expect(logoImage).toBeInTheDocument();
  });

  it("should check if the class is correct", () => {
    render(<HeaderComponent />);

    const headerElement = screen.getByTestId("header");

    expect(headerElement).toHaveClass("headerContent");
  });
});
