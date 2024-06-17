import { fireEvent, render } from "@testing-library/react";
import Counter from "./Counter";

test('Find heading text and Button Content in the Counter Component',()=>{
    const {getByText}=render(<Counter />)

    const counterheadingElement=getByText('Welcome to Counter Program');
    const ButtonContent=getByText('IncValue');

    expect(counterheadingElement).toBeInTheDocument();
    expect(ButtonContent).toBeInTheDocument();

});

test('Start with Count at 0',()=>{
    const {getByText}=render(<Counter />);
    const countElement=getByText('0');

    expect(countElement).toBeInTheDocument();
})


test('Increments count when button is Clicked',()=>{
    const {getByText}=render(<Counter />);
    const defaultcountElement=getByText('0');
    const IncButtonElement=getByText('IncValue');

    fireEvent.click(IncButtonElement);
    expect(defaultcountElement.textContent).toBe('10');
})