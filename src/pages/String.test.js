import { render, screen } from "@testing-library/react"
import String from "./String"



/*test("string testing", () => {
    render(<String />)
    const str = screen.getByText("String testing");
    expect(str).toBeInTheDocument();
})*/

/*test("string testing", () => {
    render(<String />)
    const str = screen.getByText("String test", {exact: false});
    expect(str).toBeInTheDocument()
}) */


test("string testing", () => {
  render(<String />);
  const str = screen.getByText("test", { exact: false });
  expect(str).toBeInTheDocument();
});