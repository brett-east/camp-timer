import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { rowReducer, currentTimeReducer, soundsReducer, manualSoundReducer } from 'reducers';
import { getTimes, initialSounds } from 'TimerAPI';

let initialRows = getTimes();

let initialState = {
  ...initialRows,
  ...initialSounds
}

var reducer = combineReducers({
  rows: rowReducer,
  date: currentTimeReducer,
  sounds: soundsReducer,
  manualSound: manualSoundReducer
});

export var store = createStore(reducer, initialState, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
