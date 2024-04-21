import { render, screen } from "@testing-library/react"
import ClassComp from "./ClassComp"



test("testing oc class based component", () => {
    render(<ClassComp />)
    const classElem = screen.getByText("Hello ClassComp");
    expect(classElem).toBeInTheDocument()
})