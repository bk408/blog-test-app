import { act, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import ActFn from "./ActFn"




test("testing with act function", async() => {
    userEvent.setup()
    render(<ActFn />)
    const element = screen.getByRole("textbox");
   // eslint-disable-next-line testing-library/no-unnecessary-act
   await act(async() => {
        await userEvent.type(element, "hello");
    })
    expect(screen.getByText("hello")).toBeInTheDocument();
})

// when we use async & await, sometimes assertion load first - so handling this issue we use act function

// Act function always first update the state and then call the assert function