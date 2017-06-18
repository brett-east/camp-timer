var React = require('react');
var ReactDOM = require('react-dom');
import {Provider} from 'react-redux';
import throttle from 'lodash/throttle';

import TimerApp from 'TimerApp';
import {store} from './store/configureStore';
import { setTimes } from 'TimerAPI';
import { routes } from './routes/routes';


// App.css
require('applicationStyles');


store.subscribe(throttle(() => {
  setTimes({
    rows: store.getState().rows
  });
}), 1000);


ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
);
