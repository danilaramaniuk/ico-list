import { handleActions } from 'redux-actions';

const initialState = {
  contributions: [],
  barIndex: 0,
};

export default actions => handleActions({
  [actions.setItems](state, { payload }) {
    return {
      ...state,
      contributions: payload,
    };
  },
  [actions.setBarIndex](state, { payload }) {
    return {
      ...state,
      barIndex: payload,
    };
  },
}, initialState);
