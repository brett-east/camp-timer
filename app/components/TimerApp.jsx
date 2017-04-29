import React from 'react';

import CurrentTime from 'CurrentTime';
import ManualTime from 'ManualTime';
import SavedList from 'SavedList';
import TimesTable from 'TimesTable';

class TimerApp extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <CurrentTime />
          <ManualTime />
          <div className="col-md-12">
            <SavedList />
            <TimesTable />
          </div>
        </div>
      </div>
    )
  }
}

export default TimerApp;
