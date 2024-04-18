
import renderer from "react-test-renderer";
import User from "./user";

test("testing of class component", () => {
    const compData = renderer.create(<User />).getInstance()
    expect(compData.getUserList()).toMatch("user ");
})