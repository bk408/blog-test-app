import { render, screen } from "@testing-library/react"
import Title from "./components/Title"


/*test("single title testing", () => {
    render(<Title />)
    const titleTest = screen.getByTitle("button");
    expect(titleTest).toBeInTheDocument();
}) */

test("multiple title testing", () => {
    render(<Title />)
    const title = screen.getAllByTitle("button");

    for (let i = 0; i < title.length; i++){
        expect(title[i]).toBeInTheDocument()
    }

    
})