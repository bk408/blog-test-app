import { render, screen } from "@testing-library/react"
import Text from "./Text"


/*test("single text testing", () => {
    render(<Text />)
    const hTest = screen.getByText("H tag");
    const pTest = screen.getByText("P tag");
    const buttonTest = screen.getByText("print")

    expect(hTest).toBeInTheDocument()
    expect(pTest).toBeInTheDocument()
    expect(buttonTest).toBeInTheDocument()
}) */

test("multiple text testing", () => {
    render(<Text />)
      const hTest = screen.getAllByText("H tag");
    const pTest = screen.getAllByText("P tag");
    const buttonTest = screen.getAllByText("print");

    for (let i = 0; i < hTest.length; i++){
        expect(hTest[i]).toBeInTheDocument();
    }

     for (let i = 0; i < hTest.length; i++) {
       expect(pTest[i]).toBeInTheDocument();
    }
    
     for (let i = 0; i < hTest.length; i++) {
       expect(buttonTest[i]).toBeInTheDocument();
     }

    
  
})