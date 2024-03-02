import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import HeaderComponent from "./header.component";

describe("HeaderComponent", () => {
  it("should check if the logo is present", () => {
    render(<HeaderComponent />);

    const logoImage = screen.getByAltText("logo");

    expect(logoImage).toBeInTheDocument();
  });
});
