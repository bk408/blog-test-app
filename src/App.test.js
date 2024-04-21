 import { fireEvent, render, screen } from "@testing-library/react";

import App from "./App";
 



test("Email input testing", () => {
  render(<App />)
  const checkEmail = screen.getByRole("textbox");
  const checkPlaceholder = screen.getByPlaceholderText("xyz@gmail.com");
  expect(checkEmail).toBeInTheDocument();
  expect(checkPlaceholder).toBeInTheDocument();
})


test("button click testing", () => {
  render(<App />);
  const checkButton = screen.getByText("Increment");
  fireEvent.click(checkButton);
  const counterElement = screen.getByText("1"); // Assuming the counter starts from 0
  expect(counterElement).toBeInTheDocument();
});

/*test("button click testing", () => {
  render(<App />)
  const checkButton = screen.getByText("Increment");
  fireEvent.click(checkButton);
  expect(checkButton.textContent).toBe(0);
})*/














/*test("render the app", () => {
    render(<App />)
    const linkElement = screen.getByText(/Learn ReAct/i);
    expect(linkElement).toBeInTheDocument();
})


test("Testing Input box", () => {
    render(<App />)
    let checkBox = screen.getByRole("textbox");
    let checkPlaceholder = screen.getByPlaceholderText("Enter your name");
    expect(checkBox).toBeInTheDocument();
    expect(checkPlaceholder).toBeInTheDocument();
    expect(checkBox).toHaveAttribute("id", "name")
    expect(checkBox).toHaveAttribute("name", "john")
    expect(checkBox).toHaveAttribute("value", "inputText");
})

test("testing button", () => {
    render(<App />)
    let checkButton = screen.getByRole("button");
    expect(checkButton).toBeInTheDocument();
    expect(checkButton).toHaveAttribute("id", "btn")
})


  test("testing button2", () => {
    render(<App />);
    let checkButton = screen.getByRole("button");
    expect(checkButton).toBeInTheDocument();
    expect(checkButton).toHaveAttribute("id", "btn");
  });

describe("frontend testing", () => {
       test("testing button3", () => {
         render(<App />);
         let checkButton = screen.getByRole("button");
         expect(checkButton).toBeInTheDocument();
         expect(checkButton).toHaveAttribute("id", "btn");
       });
    
    
    describe("UI testing", () => {
         test("testing button4", () => {
           render(<App />);
           let checkButton = screen.getByRole("button");
           expect(checkButton).toBeInTheDocument();
           expect(checkButton).toHaveAttribute("id", "btn");
         });
    
    })
})
  
describe("footer testing", () => {
    test("footer", () => {
        render(<App />)
        let checkFooter = screen.getByText("Hello Testing");
        expect(checkFooter).toBeInTheDocument();
        expect(checkFooter).toHaveAttribute("id", "foot");
    })
})*/





