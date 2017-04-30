var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import TimerApp from 'TimerApp';


// App.css
require('applicationStyles');



ReactDOM.render(
    <TimerApp />,
  document.getElementById('app')
);
