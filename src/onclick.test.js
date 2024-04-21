import { fireEvent, render, screen } from "@testing-library/react"
import OnClick from "./onClick"


test("Onclick component testing", () => {
    render(<OnClick />);
    let checkButton = screen.getByRole("button");
    fireEvent.click(checkButton);
    expect(screen.getByText("Hello Bhavya")).toBeInTheDocument()
})