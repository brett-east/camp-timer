import React from 'react';

import TableRow from 'TableRow';

class TimesTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rows: [{ hour: 2,
                            minute: 59,
                            ampm: "am",
                            sound: "reveille",
                            enabled: true
                          },
                          { hour: 5,
                            minute: 59,
                            ampm: "pm",
                            sound: "first_call",
                            enabled: false
                          }],
                 someOtherState: true,
                 anotherState: true
                 };
  }
  timerRows() {
    let rowsArray = [];
    for (let i = 0; i < this.state.rows.length; i++){
      rowsArray.push(<TableRow key={i}
                       row={i}
                       hour={this.state.rows[i].hour}
                       minute={this.state.rows[i].minute}
                       ampm={this.state.rows[i].ampm}
                       sound={this.state.rows[i].sound}
                       enabled={this.state.rows[i].enabled}
                       />);
    }
    return rowsArray;
  }
  addRow() {
    // get the rows
    // var rows = ;
    // get the current row
    // split the existing rows
    // push a new row in the mix

  }
  render() {
    return(
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Sound</th>
            <th>Enabled</th>
            <th>Remove row</th>
            <th>Add row</th>
          </tr>
        </thead>
        <tbody>
          {this.timerRows()}
        </tbody>
      </table>
    )
  }
}


export default TimesTable;
