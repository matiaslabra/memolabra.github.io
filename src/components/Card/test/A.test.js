import React from 'react';
import { render } from '@testing-library/react';

import A from '../A';

describe('<A />', () => {
  it('should render an <a> tag', () => {
    const { container } = render(<A />);
    expect(container.querySelector('a')).not.toBeNull();
  });

  it('should have a class attribute', () => {
    const { container } = render(<A />);
    expect(container.querySelector('a').hasAttribute('class')).toBe(true);
  });
});
