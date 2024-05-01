/* eslint-disable react/prop-types */

import JsQuery from "./JsQuery";
const { render } = require("@testing-library/react");

test("test case with custom query", () => {
  render(<JsQuery />);

  // eslint-disable-next-line testing-library/no-node-access
  const element = document.querySelector("#testId");
  expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("JsQuery");
    expect(element).toHaveAttribute("class")
});
