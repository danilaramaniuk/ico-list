import { handleActions } from 'redux-actions';
import { setItems } from './actions';

const initialState = {
  contributions: [],
};

export default handleActions({
  [setItems](state, { payload }) {
    return {
      ...state,
      contributions: payload,
    };
  },
}, initialState);
