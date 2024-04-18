import { fireEvent, render, screen } from "@testing-library/react"
import Counter from "./counter"


test("onChange event testing", () => {
    render(<Counter />)
    let input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: 'ab' } });
    expect(input.value).toBe('abtest')
})