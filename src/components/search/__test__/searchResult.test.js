import SearchComponent from '../searchComponent';
import { ResultCard, ResultComponent } from '../../result';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { requestSearch } from '../../../util/helper';
import App from '../../../App';
import { BrowserRouter, Routers } from 'react-router-dom';

test('it check if the component is in loading state after the input is called', async () => {
  render(<SearchComponent />);
  fireEvent.change(await screen.findByTestId('search'), {
    target: { value: 'atif' },
  });
  const res = await screen.findAllByTestId('loading');
  expect(res.length).toBe(1);
});

// test('check if result card is returned after api is resolved', async () => {
//   const { rerender } = render(<SearchComponent />);
//   fireEvent.change(await screen.findByTestId('search'), {
//     target: { value: 'atif' },
//   });
//   await requestSearch('atif').then(async (data) => {
//     rerender(<ResultComponent results={data} />);
//     const res = await screen.findAllByTestId('hello');
//     expect(res.length).toBe(1);
//   });
// });
