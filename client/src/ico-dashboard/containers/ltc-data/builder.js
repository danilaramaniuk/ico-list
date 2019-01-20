import actionsCreator from '../containers-creator/actions';
import reducerCreator from '../containers-creator/reducer';
import sagaCreator from '../containers-creator/saga';
import wrapper from '../containers-creator/wrapper';
import { CryptocurrencyBar } from '../../components';
import { LTC } from '../../constants';

export const actions = actionsCreator(LTC);
export const reducer = reducerCreator(actions);
export const saga = sagaCreator(actions, LTC);
export const Component = wrapper(CryptocurrencyBar, actions, LTC);
