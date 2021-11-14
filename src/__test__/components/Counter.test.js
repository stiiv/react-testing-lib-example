import { render, fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import Counter from '../../components/Counter';

let component;
let header;
let counterNumber;
let inputEl;
let addButtonEl;
let subtractButtonEl;

beforeEach(() => {
  component = render(<Counter title="My Counter" />);

  header = component.getByTestId('counter-header');
  counterNumber = component.getByTestId('counter-number');
  inputEl = component.getByTestId('counter-input');
  addButtonEl = component.getByTestId('counter-add-button');
  subtractButtonEl = component.getByTestId('counter-subtract-button');
});

describe('<Counter />', () => {
  it('should display counter title prop in h2 heading', () => {
    expect(header.textContent).toBe('My Counter');
  });

  it('should be able to change input value', () => {
    expect(inputEl.value).toBe('1');

    fireEvent.change(inputEl, {
      target: {
        value: '5'
      }
    });
    expect(inputEl.value).toBe('5');
  });

  it('should increase counter value by the number specified in counter input field', () => {
    fireEvent.change(inputEl, {
      target: {
        value: '5'
      }
    });

    fireEvent.click(addButtonEl);

    expect(counterNumber.textContent).toBe('5');
  });

  it('should decrease counter value by the number specified in counter input field', () => {
    for (let i = 0; i < 5; i++) {
      fireEvent.click(addButtonEl);
    }
    fireEvent.click(subtractButtonEl);

    expect(counterNumber.textContent).toBe('4');
  });

  it('should have error displayed on Subtract button when the counter reaches negative value', () => {
    fireEvent.click(subtractButtonEl);
    expect(subtractButtonEl).toHaveClass('MuiButton-outlinedError');

    fireEvent.click(addButtonEl);
    fireEvent.click(addButtonEl);

    expect(subtractButtonEl).not.toHaveClass('MuiButton-outlinedError');
  });
});
