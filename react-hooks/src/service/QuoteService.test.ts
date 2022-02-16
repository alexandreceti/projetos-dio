import {rest} from 'msw';
import {setupServer} from 'msw/node'

import { getQuote } from './quoteService';

const url = <string> process.env.REACT_APP_API;

const response = { test: 'testing'}

const server = setupServer(
  rest.get(`${url}`, (req, res, ctx) => {
    return res(ctx.json(response))
  })
);

beforeAll(()=> server.listen());
afterEach(()=> server.resetHandlers());
afterAll(()=> server.close());

test('Transform json respose into object', async () => {
  const quote = await getQuote();
  
  expect(quote).toStrictEqual(response);
})