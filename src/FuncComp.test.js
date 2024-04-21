import { fireEvent, render, screen } from "@testing-library/react"
import FuncComp from "./FuncComp"


test("Function component testing case-1", () => {
    render(<FuncComp />)
    const btn = screen.getByTestId('btn1');
    fireEvent.click(btn);
    expect(screen.getByText("Hello Function")).toBeInTheDocument()
})