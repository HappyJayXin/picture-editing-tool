import { render, screen } from '@testing-library/react';
import Button from './index';

describe('<Button />', () => {
  test('should ', () => {
    render(<Button>Hello World!</Button>);

    expect(screen.getByText('Hello World!')).toBeInTheDocument();
  });
});
