import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import FooterComponent from "./footer.component";

describe("FooterComponent", () => {
  it("should render the footer", () => {
    render(<FooterComponent />);

    const footer = screen.getByText(/Oxeanbits © 2024/i);
    expect(footer).toBeInTheDocument();
  });
});
