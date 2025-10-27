import { render, screen, fireEvent } from "@testing-library/react";
import PrincipleCard from "../components/PrincipleCard";

const mockPrinciple = {
  id: 1,
  name: "Test Principle",
  definition: "This is a test definition",
  category: "Problem Solving & Deep Work",
};

describe("PrincipleCard", () => {
  test("renders principle name and category", () => {
    render(<PrincipleCard principle={mockPrinciple} />);

    expect(screen.getByText("Test Principle")).toBeInTheDocument();
    expect(screen.getByText("Problem Solving")).toBeInTheDocument();
  });

  test("flips card when clicked", () => {
    render(<PrincipleCard principle={mockPrinciple} />);

    const card = screen.getByText("Test Principle").closest(".principle-card");
    fireEvent.click(card);

    expect(screen.getByText("This is a test definition")).toBeInTheDocument();
  });

  test("shows menu when menu button is clicked", () => {
    render(<PrincipleCard principle={mockPrinciple} />);

    const menuButton = screen.getByText("⋮");
    fireEvent.click(menuButton);

    expect(screen.getByText("Edit")).toBeInTheDocument();
    expect(screen.getByText("Delete")).toBeInTheDocument();
  });
});
