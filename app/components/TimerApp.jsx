import React from 'react';

import CurrentTime from 'CurrentTime';
import ManualTime from 'ManualTime';
import SavedList from 'SavedList';
import TimesList from 'TimesList';

class TimerApp extends React.Component {
  constructor(props){
    super(props);
    this.handleAddRow = this.handleAddRow.bind(this);
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
      ],
      lastId: 2
   };
  }
  handleAddRow() {
    this.setState((prevState, props) => {
      return {
        rows: [
          ...prevState.rows,
          {
            id: prevState.lastId + 1,
            time: 0,
            sound: 'first_call',
            enabled: true
          }
        ],
        lastId: prevState.lastId + 1
      }
      console.log(rows);
    });

  }
  render() {
    var { rows } = this.state;
    return (
      <div className="container">
        <div className="row">
          <CurrentTime />
          <ManualTime />
          <div className="col-md-12">
            <TimesList rows={rows} handleAddRow={this.handleAddRow}/>
          </div>
        </div>
      </div>
    )
  }
}

export default TimerApp;
