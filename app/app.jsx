var React = require('react');
var ReactDOM = require('react-dom');

import {Provider} from 'react-redux';

import TimerApp from 'TimerApp';
import {store} from './store/configureStore';


// App.css
require('applicationStyles');



ReactDOM.render(
  <Provider store={store}>
    <TimerApp />
  </Provider>,
  document.getElementById('app')
);
