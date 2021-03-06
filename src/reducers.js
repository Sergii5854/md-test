import { combineReducers } from 'redux-immutable';
import globalReducer from './containers/App/reducer';

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {

  return combineReducers({
    global: globalReducer,
    ...injectedReducers,
  });
}
