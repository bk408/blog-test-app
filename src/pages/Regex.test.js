import { render, screen } from "@testing-library/react"
import Regex from "./Regex"


test("regex testing", () => {
    render(<Regex />);
    const regex = screen.getByText(/Regex testing/i)
    expect(regex).toBeInTheDocument();
})