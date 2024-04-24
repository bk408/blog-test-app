
// We use findBy when we are testing hat data which is very much or data is coming from any api. so in that cases we use findBy and findAllBy


import { render, screen } from "@testing-library/react"
import Find from "./Find"


/* 0test("findBy testing", async () => {
    render(<Find />)
    const fnd = await screen.findByText("data found")
    expect(fnd).toBeInTheDocument()
})  */


test("findBy testing", async () => {
  render(<Find />);
  const fnd = await screen.findByText("data found", {}, {timeout:5000});
  expect(fnd).toBeInTheDocument();
});  