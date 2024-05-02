import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import OnChangeEvent from "./OnChangeEvent"



test("onChange Event testing", async () => {
    userEvent.setup()
    render(<OnChangeEvent />)
    const element = screen.getByRole("textbox")
    await userEvent.type(element, "bhavya")
    expect(screen.getByText("bhavya")).toBeInTheDocument();
})