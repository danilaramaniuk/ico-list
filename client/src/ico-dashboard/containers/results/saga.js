import { call, put, takeEvery } from 'redux-saga/effects';
import ContributionModel from '~/common/models/contribution';
import { setItems, setRange, setValue, fetchContributions } from './actions';

export function* fetchContributionsHandler() {
  try {
    const { data: { contributions } } =
      yield call(ContributionModel.getContributions);

    const maxValue = Math.max(...contributions.map(item => item.value));
    const minValue = Math.min(...contributions.map(item => item.value));

    yield put(setRange({ min: minValue, max: maxValue }));
    yield put(setValue({ min: minValue, max: maxValue }));
    yield put(setItems(contributions));
  } catch (e) {
    console.error(e);
  }
}

export default [
  takeEvery(fetchContributions, fetchContributionsHandler),
];
