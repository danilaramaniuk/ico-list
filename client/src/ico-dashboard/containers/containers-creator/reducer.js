import { handleActions } from 'redux-actions';

const initialState = {
  contributions: [],
};

export default actions => handleActions({
  [actions.setItems](state, { payload }) {
    return {
      ...state,
      contributions: payload,
    };
  },
}, initialState);
