import { createAction } from 'redux-actions';

const CONTRIBUTIONS = 'CONTRIBUTIONS';

export default type => ({
  setItems: createAction(`${type}_${CONTRIBUTIONS}_SET_ITEMS`),
});
