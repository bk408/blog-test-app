

// queryBy and getBy both are same but the only difference is that when if we use queryBy then we can test hidden values or items.


import { render, screen } from "@testing-library/react"
import Query from "./Query"


test("queryBy testing", () => {
    render(<Query />)
    const que = screen.queryByText("Login")
    expect(que).toBeInTheDocument()
})


test("queryBy testing2", () => {
    render(<Query />)
    const que2 = screen.queryByPlaceholderText("name");
    expect(que2).toBeInTheDocument()
});