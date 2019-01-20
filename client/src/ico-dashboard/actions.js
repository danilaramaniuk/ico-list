import { createAction } from 'redux-actions';

const CONTRIBUTIONS = 'CONTRIBUTIONS';

export const setCurrentTab = createAction(`${CONTRIBUTIONS}_SET_CURRENT_TAB`);
export default setCurrentTab;
