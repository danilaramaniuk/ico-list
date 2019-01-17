import actionsCreator from '../containers-creator/actions';
import reducerCreator from '../containers-creator/reducer';
import { ETH } from '../../constants';

export const actions = actionsCreator(ETH);
export const reducer = reducerCreator(actions);
