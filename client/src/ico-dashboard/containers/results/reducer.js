import { handleActions } from 'redux-actions';
import { setRange, setValue } from './actions';

const initialState = {
  range: { min: 0, max: 0 },
  value: { min: 0, max: 0 },
};

export default handleActions({
  [setRange](state, { payload }) {
    return {
      ...state,
      range: payload,
    };
  },
  [setValue](state, { payload }) {
    return {
      ...state,
      value: payload,
    };
  },
}, initialState);

