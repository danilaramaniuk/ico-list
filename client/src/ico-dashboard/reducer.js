import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { setItems, setCurrentTab } from './actions';
import { reducer as BTCReducer } from './containers/btc-data/builder';
import { reducer as LTCReducer } from './containers/ltc-data/builder';
import { reducer as ETHReducer } from './containers/eth-data/builder';
import resultReducer from './containers/results/reducer';
import { BTC } from './constants';

const initialState = {
  contributions: [],
  currentTab: BTC,
};

export default combineReducers({
  common: handleActions({
    [setItems](state, { payload }) {
      return {
        ...state,
        contributions: payload,
      };
    },
    [setCurrentTab](state, { payload }) {
      return {
        ...state,
        currentTab: payload,
      };
    },
  }, initialState),
  btcData: BTCReducer,
  ltcData: LTCReducer,
  ethData: ETHReducer,
  results: resultReducer,
});

