import actionsCreator from '../containers-creator/actions';
import reducerCreator from '../containers-creator/reducer';
import sagaCreator from '../containers-creator/saga';
import wrapper from '../containers-creator/wrapper';
import { CryptocurrencyBar } from '../../components';
import { BTC } from '../../constants';

export const actions = actionsCreator(BTC);
export const reducer = reducerCreator(actions);
export const saga = sagaCreator(actions, BTC);
export const Component = wrapper(CryptocurrencyBar, actions, BTC);
