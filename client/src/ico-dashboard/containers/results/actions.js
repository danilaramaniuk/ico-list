import { createAction } from 'redux-actions';

const RESULTS = 'RESULTS';

export const setValue = createAction(`${RESULTS}_SET_VALUE`);
export const setRange = createAction(`${RESULTS}_SET_RANGE`);
