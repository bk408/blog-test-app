import { fireEvent, render, screen } from "@testing-library/react"
import Click from "./click"



test("click event testing", () => {
    render(<Click />)
    let clickEvent = screen.getByRole("button");
    fireEvent.click(clickEvent);
    expect(screen.getByText("Happy testing")).toBeInTheDocument();
})