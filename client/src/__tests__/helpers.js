import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import theme from '~/main-theme';

export const renderWithTheme = component =>
  renderer.create(<ThemeProvider theme={theme}>{component}</ThemeProvider>);

export const getMockedContributions = () => ([
  {
    address: 'rnu2xb48synW6Y1AU8ZT85OX0CWBD21N',
    currency: 'LTC',
    value: 1822819,
    txid: '4911922634ee442f6704ed6cf5f860dbe70e78d1c20414d6d6f2eb4bc81e1641',
  },
  {
    address: '2siyirlxk5Q96IPZD5C4On4da7hyvrxf',
    currency: 'BTC',
    value: 2001913,
    txid: '482fc0d2502ae357bd898f4d9aed3c5f20d0f3966c49d7d06edb0cf6f50e1ce5',
  },
  {
    address: 'LQXH0O77LVLRBUQALTCXRJ4WUNLLI6KD',
    currency: 'ETH',
    value: 8288838,
    txid: '2c1bc07b4f9aedf51204115d8aaaea36b3415e3168b28c660098f82cde889b3d',
  },
]);
