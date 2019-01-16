import { createAction } from 'redux-actions';

const CONTRIBUTIONS = 'CONTRIBUTIONS';

export const setItems = createAction(`${CONTRIBUTIONS}_SET_ITEMS`);
export const setFilter = createAction(`${CONTRIBUTIONS}_SET_FILTER`);
