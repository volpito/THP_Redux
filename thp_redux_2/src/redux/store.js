import { createStore, combineReducers } from 'redux';
import pastasReducer from './pastas/pastasReducer';
import ricesReducer from './rices/ricesReducer';

const rootReducer = combineReducers({
  pastas: pastasReducer,
  rices: ricesReducer
})

let store = createStore(rootReducer);
store.subscribe(() => console.log(store.getState()));

export default store;