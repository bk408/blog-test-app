import { render, screen } from "@testing-library/react"
import Placeholder from "./Placeholder"



test("placeholder testing", () => {
    render(<Placeholder />)
    const placeholderTest = screen.getAllByPlaceholderText("Enter your name");

    for (let i = 0; i < placeholderTest.length; i++){

        expect(placeholderTest[i]).toBeInTheDocument();
    }

})