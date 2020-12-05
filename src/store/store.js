import { createStore } from 'redux';
import itemReducer from './reducers/itemReducer.js'

const store = createStore(itemReducer);

export default store;