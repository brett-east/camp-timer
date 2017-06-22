import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { currentTimeReducer, soundsReducer, manualSoundReducer, currentlyPlayingReducer } from 'reducers/reducers';
import { rowReducer } from 'reducers/rowReducer';
import { currentListReducer, savedListsReducer } from 'reducers/listsReducer';
import { initialSounds } from 'TimerAPI';

let initialState = {
  ...initialSounds
}

var reducer = combineReducers({
  rows: rowReducer,
  date: currentTimeReducer,
  sounds: soundsReducer,
  manualSound: manualSoundReducer,
  currentlyPlaying: currentlyPlayingReducer,
  currentList: currentListReducer,
  savedLists: savedListsReducer
});

export var store = createStore(reducer, initialState, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));
