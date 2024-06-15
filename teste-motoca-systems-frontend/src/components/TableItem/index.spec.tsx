/* import { useQuery } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TableItem from ".";

jest.mock("@tanstack/react-query", () => ({
  useQuery: jest.fn(),
}));

describe("test: TableItem", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders loading spinner while data is loading", () => {
    (useQuery as jest.Mock).mockReturnValueOnce({ isLoading: true });
    render(<TableItem />);

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
});
 */
