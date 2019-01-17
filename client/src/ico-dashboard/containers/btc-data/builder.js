import actionsCreator from '../containers-creator/actions';
import reducerCreator from '../containers-creator/reducer';
import { BTC } from '../../constants';

export const actions = actionsCreator(BTC);
export const reducer = reducerCreator(actions);
