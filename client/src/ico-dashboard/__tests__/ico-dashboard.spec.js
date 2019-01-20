import React from 'react';
import { renderWithTheme, getMockedContributions } from '~/__tests__/helpers';
import { BTC, ETH } from '../constants';
import { ICODashboard } from '../index';

jest.mock('../containers/btc-data', () => () => <div>btc-data</div>);
jest.mock('../containers/ltc-data', () => () => <div>ltc-data</div>);
jest.mock('../containers/eth-data', () => () => <div>eth-data</div>);
jest.mock('../containers/results', () => () => <div>results</div>);

const props = {
  contributions: getMockedContributions(),
  setItems: jest.fn(),
  setCurrentTab: jest.fn(),
  currentTab: BTC,
};

describe('ICODashboard snapshots', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(<ICODashboard {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with ETH tab', () => {
    const updatedProps = { ...props, currentTab: ETH };
    const tree = renderWithTheme(<ICODashboard {...updatedProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
