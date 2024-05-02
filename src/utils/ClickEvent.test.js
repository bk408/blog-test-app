import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ClickEvent from "./ClickEvent";


test(" Click Event with User Event Library", async() => {
    userEvent.setup();
    render(<ClickEvent />)
    const btn =   screen.getByText("click")
   await userEvent.click(btn)
    expect(screen.getByText("hello")).toBeInTheDocument()
});