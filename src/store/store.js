import { combineReducers, createStore } from 'redux';
import itemReducer from './reducers/itemReducer.js'
import loginReducer from './reducers/loginReducer.js'

const store = createStore(combineReducers({
    items: itemReducer,
    login: loginReducer
}));

export default store;