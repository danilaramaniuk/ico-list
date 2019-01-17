import { createAction } from 'redux-actions';

const CONTRIBUTIONS = 'CONTRIBUTIONS';

export const setItems = createAction(`${CONTRIBUTIONS}_SET_ITEMS`);
export const setCurrentTab = createAction(`${CONTRIBUTIONS}_SET_CURRENT_TAB`);
export const fetchInitialData = createAction(`${CONTRIBUTIONS}_FETCH_INITIAL_DATA`);
