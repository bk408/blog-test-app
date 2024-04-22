import { render, screen } from "@testing-library/react"
import Role from "./Role"


test("test by role", () => {
    render(<Role />)
    const checkRole = screen.getByRole("textbox");
    expect(checkRole).toBeInTheDocument()
})