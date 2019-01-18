import React from 'react';
import { renderWithTheme, getMockedContributions } from '~/__tests__/helpers';
import Card from '../card';

const props = {
  item: getMockedContributions()[0],
};

describe('Card component', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<Card {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with index correctly', () => {
    const propsWithIndex = { ...props, index: 1 };
    const tree = renderWithTheme(<Card {...propsWithIndex} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
