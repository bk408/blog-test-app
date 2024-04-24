import { render, screen } from "@testing-library/react"
import Function from "./Function"


test("textMatch with function", () => {
    render(<Function />)
    const fun = screen.getByText((content, element) => content.startsWith("Function"))
    expect(fun).toBeInTheDocument();
})

/*test("another function testing", () => {
  render(<Function />);
  const test = screen.getByText((content, element) =>
    content.endsWith("bhavya")
  );
  expect(test).toBeInTheDocument();
});*/

test("another function testing2", () => {
  render(<Function />);
  const test2 = screen.getByText((content, element) =>
    content.endsWith("testing")
  );
  expect(test2).toBeInTheDocument();
});