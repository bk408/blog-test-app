import { render, screen } from "@testing-library/react"
import Input from "./Input"


test("Email type input testing", () => {
    render(<Input />)
    let emailInput = screen.getByRole("checkbox");
    expect(emailInput).toBeInTheDocument();
})