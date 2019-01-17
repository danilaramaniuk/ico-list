import { all } from 'redux-saga/effects';

import icoDashboardSaga from '~/ico-dashboard/saga';

export default function* () {
  yield all([
    ...icoDashboardSaga,
  ]);
}
