import React from 'react';
import {connect} from 'react-redux';

import CurrentTime from 'CurrentTime';
import ManualSound from 'ManualSound';
import SavedList from 'SavedList';
import TimesList from 'TimesList';

class TimerApp extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <CurrentTime />
          <ManualSound />
          <div className="col-md-12">
            <SavedList />
            <TimesList />
          </div>
        </div>
      </div>
    )
  }
}


export default connect(state => state)(TimerApp);
