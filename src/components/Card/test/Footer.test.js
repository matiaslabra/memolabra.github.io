import React from 'react';
import { render } from '@testing-library/react';

import Footer from '../Footer';

describe('<Footer />', () => {
  it('should have a className attribute', () => {
    const { container } = render(<Footer />);
    expect(container.firstChild.hasAttribute('class')).toBe(true);
  });

  it('should render its text', () => {
    const children = 'Text';
    const { container, queryByText } = render(<Footer>{children}</Footer>);
    const { childNodes } = container.querySelector('p');
    expect(childNodes).toHaveLength(1);
    expect(queryByText(children)).not.toBeNull();
  });
});
