import { render, fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import Counter from '../../components/Counter';

describe('<Counter />', () => {
  it('should display counter title prop in h2 heading', () => {
    const component = render(<Counter title="My Counter" />);
    const header = component.getByTestId('counter-header');

    expect(header.textContent).toBe('My Counter');
  });

  it('should be able to change input value', () => {
    const component = render(<Counter title="My Counter" />);
    const inputEl = component.getByTestId('counter-input');

    expect(inputEl.value).toBe('1');

    fireEvent.change(inputEl, {
      target: {
        value: 5
      }
    });
    expect(inputEl.value).toBe('5');
  });

  it('should increase counter value by the number specified in counter input field', () => {
    const component = render(<Counter title="My Counter" />);
    const inputEl = component.getByTestId('counter-input');
    const addButtonEl = component.getByTestId('counter-add-button');
    const counterNumber = component.getByTestId('counter-number');

    fireEvent.change(inputEl, {
      target: {
        value: '5'
      }
    });

    fireEvent.click(addButtonEl);

    expect(counterNumber.textContent).toBe('5');
  });

  it('should decrease counter value by the number specified in counter input', () => {
    const component = render(<Counter title="My Counter" />);
    const addButtonEl = component.getByTestId('counter-add-button');
    const subtractButtonEl = component.getByTestId('counter-subtract-button');
    const counterNumber = component.getByTestId('counter-number');

    for (let i = 0; i < 5; i++) {
      fireEvent.click(addButtonEl);
    }
    fireEvent.click(subtractButtonEl);

    expect(counterNumber.textContent).toBe('4');
  });

  it('should have error displayed when the counter reaches negative value', () => {
    const component = render(<Counter title="My Counter" />);
    const addButtonEl = component.getByTestId('counter-add-button');
    const subtractButtonEl = component.getByTestId('counter-subtract-button');

    fireEvent.click(subtractButtonEl);
    expect(subtractButtonEl).toHaveClass('MuiButton-outlinedError');

    fireEvent.click(addButtonEl);
    fireEvent.click(addButtonEl);

    expect(subtractButtonEl).not.toHaveClass('MuiButton-outlinedError');
  });
});
