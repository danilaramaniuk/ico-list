import { saga as btcDataSaga } from './containers/btc-data/builder';
import { saga as ltcDataSaga } from './containers/ltc-data/builder';
import { saga as ethDataSaga } from './containers/eth-data/builder';
import resultsSaga from './containers/results/saga';

export default [
  ...btcDataSaga,
  ...ltcDataSaga,
  ...ethDataSaga,
  ...resultsSaga,
];
