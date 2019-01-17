import actionsCreator from '../containers-creator/actions';
import reducerCreator from '../containers-creator/reducer';
import { LTC } from '../../constants';

export const actions = actionsCreator(LTC);
export const reducer = reducerCreator(actions);
