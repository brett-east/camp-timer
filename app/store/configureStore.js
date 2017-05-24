import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rowReducer, currentTimeReducer } from 'reducers';

var reducer = combineReducers({
  rows: rowReducer,
  date: currentTimeReducer
});

export var store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
