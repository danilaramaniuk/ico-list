import { call, put, takeEvery } from 'redux-saga/effects';
import ContributionModel from '~/common/models/contribution';

export default (actions, currency) => {
  function* fetchContributionsByCurrencyHandler() {
    try {
      const { data: { contributions } } =
        yield call(ContributionModel.getContributions, currency);

      yield put(actions.setItems(contributions));
    } catch (e) {
      console.error(e);
    }
  }

  return [
    takeEvery(actions.fetchContributionsByCurrency, fetchContributionsByCurrencyHandler),
  ];
};
