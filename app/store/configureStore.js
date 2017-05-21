import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rowReducer } from './../reducers/reducers.js';

var reducer = combineReducers({
  rows: rowReducer
});

export var store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
