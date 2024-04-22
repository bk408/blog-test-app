import { render, screen } from "@testing-library/react"
import AllByRole from "./AllByRole"



test("get allByRoll button testing", () => {
    render(<AllByRole />)
    const allTesting = screen.getAllByRole("button")
   // expect(allTesting[0]).toBeInTheDocument();

    for (let i = 0; i < allTesting.length; i++){
         expect(allTesting[i]).toBeInTheDocument();
    }
})


test("get AllByRoll section testing", () => {
    render(<AllByRole />)
    const options = screen.getAllByRole("option");

    for (let i = 0; i < options.length; i++){
        expect(options[i]).toBeInTheDocument()
    }
})