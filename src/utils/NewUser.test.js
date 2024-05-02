import { render, screen } from "@testing-library/react";
import NewUser from "./NewUser";



test("props testing", () => {
    const name = "bhavya";
    render(<NewUser name={name} />)
    const user = screen.getByText(name)
    expect(user).toBeInTheDocument()
})