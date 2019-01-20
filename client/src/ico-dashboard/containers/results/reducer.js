import { handleActions } from 'redux-actions';
import { setRange, setValue, setItems } from './actions';

const initialState = {
  range: { min: 0, max: 0 },
  value: { min: 0, max: 0 },
  contributions: [],
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
  [setItems](state, { payload }) {
    return {
      ...state,
      contributions: payload,
    };
  },
}, initialState);

