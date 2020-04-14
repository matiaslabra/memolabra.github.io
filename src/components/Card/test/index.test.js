import React from 'react';
import Card from '../index';
import { render } from '@testing-library/react';

describe('<Card />', () => {
  it('should render an <a> tag', () => {
    const content = {};
    const { container } = render(<Card item={content} />);
    expect(container.querySelector('a')).not.toBeNull();
  });
});
