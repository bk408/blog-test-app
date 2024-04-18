import { render } from "@testing-library/react"
import Click from "./click"


test("snapshot testing", () => {
    const view = render(<Click />);
    expect(view).toMatchSnapshot();
})