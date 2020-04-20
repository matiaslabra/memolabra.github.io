import React from 'react';
import Card from '../index';
import { render, getByText } from '@testing-library/react';

describe('<Card />', () => {
  let item;

  // Before each test reset the item data for safety
  beforeEach(() => {
    item = {
      name: 'Service tracker',
      language: ['Javascript', 'PHP'],
      description: 'Keep track of services, rooms and dates in real-time.',
      technologies: [
        'React',
        'Redux',
        'Socket.IO',
        'styled-components',
        'Webpack',
        'MongoDB',
      ],
      year: '2020',
    };
  });

  it('should render the items language joined by - at the beginning', () => {
    const { container } = render(<Card item={item} />);
    expect(
      getByText(container, (content) =>
        content.startsWith(item.language.join(' - ')),
      ),
    ).not.toBeNull();
  });

  it('should render "text" if item has an url', () => {
    let text = '| open sourced';
    const { container } = render(
      <Card
        item={{
          ...item,
          url: 'https://github.com/matiaslabra/servicetracker',
        }}
      />,
    );
    expect(
      getByText(container, (content) => content.endsWith(text)),
    ).not.toBeNull();
  });

  it('should not render "text" if item has not an url', () => {
    let text = '| open sourced';
    const { queryByText } = render(
      <Card
        item={{
          ...item,
          url: '',
        }}
      />,
    );
    expect(queryByText(text)).toBeNull();
  });

  it('should render the items name', () => {
    const { queryByText } = render(<Card item={item} />);
    expect(queryByText(item.name)).not.toBeNull();
  });

  it('should render the items description ', () => {
    const { queryByText } = render(<Card item={item} />);
    expect(queryByText(item.description)).not.toBeNull();
  });

  it('should render the items technologies joined by -  ', () => {
    const { queryByText } = render(<Card item={item} />);
    expect(queryByText(item.technologies.join(' - '))).not.toBeNull();
  });
});
