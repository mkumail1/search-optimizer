import SearchComponent from '../searchContainer';
import { render, screen, fireEvent } from '@testing-library/react';

test('it check if the component is in loading state after the input is called', async () => {
  render(<SearchComponent />);
  fireEvent.change(await screen.findByTestId('search'), {
    target: { value: 'atif' },
  });
  const res = await screen.findAllByTestId('loading');
  expect(res.length).toBe(1);
});
