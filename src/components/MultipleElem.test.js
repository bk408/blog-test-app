import { render, screen } from "@testing-library/react"
import MultipleElem from "./MultipleElem"



test("multiple button testing", () => {
    render(<MultipleElem />)
    const buttonTest = screen.getByRole("button", { name: "submit" });
    expect(buttonTest).toBeInTheDocument();
})

test("multiple input testing", () => {
    render(<MultipleElem />)
    const inputTest1 = screen.getByRole("textbox", { name: "Name" });
    const inputTest2 = screen.getByRole("textbox", { name: "Age" });
    
    expect(inputTest1).toBeInTheDocument()
    expect(inputTest2).toBeInTheDocument()
})

test("non-sematic element testing", () => {
    render(<MultipleElem />)
    const divTest = screen.getByRole("dummy")
    expect(divTest).toBeInTheDocument()
})