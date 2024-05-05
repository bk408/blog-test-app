import { logRoles, prettyDOM, render, screen } from "@testing-library/react"
import Comp from "./Comp"


/*test("testing of debugging", () => {
    render(<Comp />)
    const element = screen.getByText(/hello world/i)
    expect(element).toBeInTheDocument();
}) */


/*test("preetyDom", () => {
  const { container } = render(<Comp />);
  // console.log(container);  // It shows HTML file which is not possible to understand so we can use prettyDOM or debug

  console.log(prettyDOM(container));
})*/

/*test("debug", () => {
    const { container, debug } = render(<Comp />)
    debug()
}) */


test("logRules", () => {
    const { container } = render(<Comp />)
    logRoles(container)
})