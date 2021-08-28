import { render, screen } from '@testing-library/react';
import App from '../App';

test('generuje główną zawartość strony', () => {
  render(<App />);
  expect(document.querySelector('#mainContent')).toBeInTheDocument();
});
