import { createStore } from 'redux';
import pastasReducer from './pastas/pastasReducer';

let store = createStore(pastasReducer);
store.subscribe(() => console.log(store.getState()));

export default store;