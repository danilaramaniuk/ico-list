import React from 'react';
import { renderWithTheme, getMockedContributions } from '~/__tests__/helpers';
import CryptocurrencyBar from '../cryptocurrency-bar';

jest.mock('react-chartjs-2', () => ({
  Bar: () => <div>Bar</div>,
}));

const props = {
  contributions: getMockedContributions(),
  label: 'label',
  barIndex: 0,
  setBarIndex: jest.fn(),
  color: 'white',
  Icon: () => null,
};

describe('CryptocurrencyBar snapshots', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<CryptocurrencyBar {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with empty contributions', () => {
    const updatedProps = { ...props, contributions: [] };
    const tree = renderWithTheme(<CryptocurrencyBar {...updatedProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('CryptocurrencyBar instance', () => {
  const renderedValue = renderWithTheme(<CryptocurrencyBar {...props} />);
  const { instance } = renderedValue.toTree().rendered;

  it('build data correctly', () => {
    expect(instance.data).toEqual({
      labels: [1, 2, 3],
      datasets: [
        {
          data: [1822819, 2001913, 8288838],
          label: 'label',
          backgroundColor: 'white',
          borderWidth: 1,
        },
      ],
    });
  });

  it('not set bar index when click on empty space', () => {
    instance.onBarClick([]);
    expect(props.setBarIndex).not.toBeCalled();
  });
});
