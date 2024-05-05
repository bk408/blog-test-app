import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FnProps from "./FnProps";


// userEvent helps to perform testing on event listeners


test("Functional Props Testing", async () => {
    // mocking the function
    const testFunction = jest.fn(); 
    userEvent.setup();
    render(<FnProps testFunction={testFunction} />)
    const btn = screen.getByRole("button");
    await userEvent.click(btn);
    expect(testFunction).toBeCalled();
});