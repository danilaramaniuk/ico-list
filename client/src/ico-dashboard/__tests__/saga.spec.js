import { put, call } from 'redux-saga/effects';
import sagaHelper from 'redux-saga-testing';
import { getMockedContributions } from '~/__tests__/helpers';
import ContributionModel from '~/common/models/contribution';
import { actions as BTCActions } from '../containers/btc-data/builder';
import { actions as LTCActions } from '../containers/ltc-data/builder';
import { actions as ETHActions } from '../containers/eth-data/builder';
import { setRange, setValue } from '../containers/results/actions';
import { fetchInitialDataHandler } from '../saga';
import { setItems } from '../actions';

const contributions = getMockedContributions();

describe('Fetch initial data flow', () => {
  const it = sagaHelper(fetchInitialDataHandler());

  it('call the mock API first', (result) => {
    expect(result).toEqual(call(ContributionModel.getAllContribution));
    return { data: { contributions } };
  });

  it('and then set items', (result) => {
    expect(result).toEqual(put(setItems(contributions)));
  });

  it('set data for bitcoin tab', (result) => {
    expect(result).toEqual(put(BTCActions.setItems([
      {
        address: '2siyirlxk5Q96IPZD5C4On4da7hyvrxf',
        currency: 'BTC',
        value: 2001913,
        txid: '482fc0d2502ae357bd898f4d9aed3c5f20d0f3966c49d7d06edb0cf6f50e1ce5',
      },
    ])));
  });

  it('set data for litecoin tab', (result) => {
    expect(result).toEqual(put(LTCActions.setItems([
      {
        address: 'rnu2xb48synW6Y1AU8ZT85OX0CWBD21N',
        currency: 'LTC',
        value: 1822819,
        txid: '4911922634ee442f6704ed6cf5f860dbe70e78d1c20414d6d6f2eb4bc81e1641',
      },
    ])));
  });

  it('set data for ethereum tab', (result) => {
    expect(result).toEqual(put(ETHActions.setItems([
      {
        address: 'LQXH0O77LVLRBUQALTCXRJ4WUNLLI6KD',
        currency: 'ETH',
        value: 8288838,
        txid: '2c1bc07b4f9aedf51204115d8aaaea36b3415e3168b28c660098f82cde889b3d',
      },
    ])));
  });

  it('set range for slider', (result) => {
    expect(result).toEqual(put(setRange({ min: 1822819, max: 8288838 })));
  });

  it('set value for slider', (result) => {
    expect(result).toEqual(put(setValue({ min: 1822819, max: 8288838 })));
  });

  it('and then nothing', (result) => {
    expect(result).toBeUndefined();
  });
});
