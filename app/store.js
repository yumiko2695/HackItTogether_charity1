import {createStore, applyMiddleware} from 'redux'
import {combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import user from './reducers/user.js'

const reducer = combineReducers({user});
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger({ collapsed: true })));

const store = createStore(reducer, middleware)
export default store;
