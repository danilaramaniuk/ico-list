import { call, put, takeEvery } from 'redux-saga/effects';
import ContributionModel from '~/common/models/contribution';
import { fetchInitialData, setItems } from './actions';
import { actions as BTCActions } from './containers/btc-data/builder';
import { actions as LTCActions } from './containers/ltc-data/builder';
import { actions as ETHActions } from './containers/eth-data/builder';
import { BTC, LTC, ETH } from './constants';

function* fetchInitialDataHandler() {
  try {
    const { data: { contributions } } = yield call(ContributionModel.getAllContribution);

    yield put(setItems(contributions));
    yield put(BTCActions.setItems(contributions.filter(({ currency }) => currency === BTC)));
    yield put(LTCActions.setItems(contributions.filter(({ currency }) => currency === LTC)));
    yield put(ETHActions.setItems(contributions.filter(({ currency }) => currency === ETH)));
  } catch (e) {
    console.error(e);
  }
}

export default [
  takeEvery(fetchInitialData, fetchInitialDataHandler),
];
