import React from 'react';

import CurrentTime from 'CurrentTime';
import ManualTime from 'ManualTime';
import SavedList from 'SavedList';
import TimesTable from 'TimesTable';

class TimerApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      rows:[
        { id: 1,
          time: 1234,
          sound: "reveille",
          enabled: true
        },
        { id: 2,
          time: 1720,
          sound: "first_call",
          enabled: false
        }
      ]
   };
  }
  render() {
    var {rows} = this.state;
    return (
      <div className="container">
        <div className="row">
          <CurrentTime />
          <ManualTime />
          <div className="col-md-12">
            <TimesTable rows={rows}/>
          </div>
        </div>
      </div>
    )
  }
}

export default TimerApp;
