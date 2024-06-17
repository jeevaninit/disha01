import { render } from "@testing-library/react"
import App from "./App";

test('Render the Correct text in the H1 Tag',()=>{
  const {getByText}=render(<App />)

  const h1element=getByText('Welcome to React Testing Library');
  expect(h1element).toBeInTheDocument();

})

test('Render the Correct text in the p tag',()=>{
  const {getByText}=render(<App />)

  const paraelement=getByText('Class 9 pm');
  expect(paraelement).toBeInTheDocument();
})