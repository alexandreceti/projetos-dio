import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import {rest} from 'msw';
import {setupServer} from 'msw/node'

import App from './App';
import { getQuote } from './service/quoteService';

test('renders app with a button, a quote and a button', () => {
  render(<App />);

  const buttonEl = screen.getByRole('button');
  const imgEl = screen.getByRole('img');
  const textEl = screen.getByText(/loading quote../i);

  expect(textEl).toBeInTheDocument()
  expect(buttonEl).toBeInTheDocument()
  expect(imgEl).toBeInTheDocument()

  // const linkElement = screen.getByText(/hello/i);
  // expect(linkElement).toBeInTheDocument();
});

const url = process.env.REACT_APP_API;

const response = { speaker: 'Speacker', quote: 'test quote'}

const server = setupServer(
  rest.get(`${url}`, (req, res, ctx) => {
    return res(ctx.json(response))
  })
);

beforeAll(()=> server.listen());
afterEach(()=> server.resetHandlers());
afterAll(()=> server.close());


test('call api on button click and update its text', async ()=> {
  render( <App />)

  const buttonEl = screen.getByRole('button');

  fireEvent.click(buttonEl)

  const quoteEl = await screen.findByText(response.quote);

  expect(quoteEl).toBeInTheDocument();
})

test('calls api on startup and renders it response', async ()=> {
  render( <App />)
  const quoteEl = await screen.findByText(response.quote);

  expect(quoteEl).toBeInTheDocument();
})