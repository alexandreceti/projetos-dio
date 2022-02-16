import { render, screen, fireEvent } from '@testing-library/react';

import { Quotes } from './Quotes';
const quote = 'test qoute';
const speaker = 'random speaker'

test('renders received quote, speaker and a button', () => {
  const callback = jest.fn();

  render(<Quotes quote={quote} speaker={speaker} onUpdate={callback}/>);

  const buttonEl = screen.getByRole('button');
  const quoteEl = screen.getByText(quote);
  const speakerEl = screen.getByText(speaker);

  expect(quoteEl).toBeInTheDocument()
  expect(speakerEl).toBeInTheDocument()
  expect(buttonEl).toBeInTheDocument()

});

test('calls a callback when button is pressed', () => {
  const callback = jest.fn();

  render(<Quotes quote={quote} speaker={speaker} onUpdate={callback}/>);

  const buttonEl = screen.getByRole('button');

  fireEvent.click(buttonEl);

  expect(callback).toHaveBeenCalledTimes(1);
})