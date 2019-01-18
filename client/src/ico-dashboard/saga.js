import { call, put, takeEvery } from 'redux-saga/effects';
import ContributionModel from '~/common/models/contribution';
import { fetchInitialData, setItems } from './actions';
import { actions as BTCActions } from './containers/btc-data/builder';
import { actions as LTCActions } from './containers/ltc-data/builder';
import { actions as ETHActions } from './containers/eth-data/builder';
import { setRange, setValue } from './containers/results/actions';
import { BTC, LTC, ETH } from './constants';

export function* fetchInitialDataHandler() {
  try {
    const { data: { contributions } } = yield call(ContributionModel.getAllContribution);

    yield put(setItems(contributions));
    yield put(BTCActions.setItems(contributions.filter(({ currency }) => currency === BTC)));
    yield put(LTCActions.setItems(contributions.filter(({ currency }) => currency === LTC)));
    yield put(ETHActions.setItems(contributions.filter(({ currency }) => currency === ETH)));

    const maxValue = Math.max(...contributions.map(item => item.value));
    const minValue = Math.min(...contributions.map(item => item.value));

    yield put(setRange({ min: minValue, max: maxValue }));
    yield put(setValue({ min: minValue, max: maxValue }));
  } catch (e) {
    console.error(e);
  }
}

export default [
  takeEvery(fetchInitialData, fetchInitialDataHandler),
];
