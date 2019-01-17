import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { setItems } from './actions';
import { reducer as BTCReducer } from './containers/btc-data/builder';
import { reducer as LTCReducer } from './containers/ltc-data/builder';
import { reducer as ETHReducer } from './containers/eth-data/builder';

const initialState = {
  contributions: [],
};

export default combineReducers({
  common: handleActions({
    [setItems](state, { payload }) {
      return {
        ...state,
        contributions: payload,
      };
    },
  }, initialState),
  btcData: BTCReducer,
  ltcData: LTCReducer,
  ethData: ETHReducer,
});

