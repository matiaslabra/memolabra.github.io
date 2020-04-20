import React from 'react';
import { render } from '@testing-library/react';

import Tagline from '../Tagline';

describe('<Tagline />', () => {
  it('should have a className attribute', () => {
    const { container } = render(<Tagline />);
    expect(container.firstChild.hasAttribute('class')).toBe(true);
  });
  it('should render its text', () => {
    const children = 'Text';
    const { container, queryByText } = render(<Tagline>{children}</Tagline>);
    const { childNodes } = container.querySelector('p');
    expect(childNodes).toHaveLength(1);
    expect(queryByText(children)).not.toBeNull();
  });
});
