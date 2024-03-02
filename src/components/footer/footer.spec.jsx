import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import FooterComponent from "./footer.component";

describe("FooterComponent", () => {
  it("should render the footer", () => {
    render(<FooterComponent />);

    const footer = screen.getByText(/Oxeanbits © 2024/i);
    expect(footer).toBeInTheDocument();
  });

  it("should check if the class is correct", () => {
    render(<FooterComponent />);

    const footerElement = screen.getByTestId("footer");
    expect(footerElement).toHaveClass("footerContainer");
  });
});
