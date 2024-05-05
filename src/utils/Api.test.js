import { render, screen } from "@testing-library/react"
import Api from "./Api"



test("api text testing", () => {
    render(<Api />);
    const element = screen.getByText("api testing");
    expect(element).toBeInTheDocument()
})


test("test for mock api", async() => {
    render(<Api />)
    const element = await screen.findAllByRole("heading")
     expect(element).toHaveLength(4)

})