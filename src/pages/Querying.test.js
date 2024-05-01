import { render, screen, within } from "@testing-library/react"
import Querying from "./Querying"



test("querying testing", () => {
    render(<Querying />)
    const element = screen.getByText("Hello Bhavya");
    const subElement = within(element).getByText("How");
    expect(element).toBeInTheDocument()
    expect(subElement).toBeInTheDocument()
})

test("second child element testing", () => {
    render(<Querying />)
    const element = screen.getByText("Hello Bhavya");
    const subElement2 = within(element).getByRole("button")
    expect(subElement2).toBeInTheDocument()
})

test("multiple child paragraph testing", () => {
    render(<Querying />)
       const element = screen.getByText("Hello Bhavya");
    const subElement3 = within(element).getAllByRole("option"); 
    for (let i = 0; i < subElement3.length; i++){

        expect(subElement3[i]).toBeInTheDocument();
    }
})