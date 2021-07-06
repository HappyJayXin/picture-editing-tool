import { render, screen } from '@testing-library/react';
import Button from './index';

describe('<Button />', () => {
  test('should show children text', () => {
    render(<Button>Hello World!</Button>);
    expect(screen.getByText('Hello World!')).toBeInTheDocument();
  });

  test('render a element', () => {
    const { container } = render(<Button href="#">Hello World!</Button>);
    expect(container.querySelector('a')).toBeInTheDocument();
  });

  test('should render button element', () => {
    const { container } = render(<Button>Hello World!</Button>);
    expect(container.querySelector('button')).toBeInTheDocument();
  });
});
