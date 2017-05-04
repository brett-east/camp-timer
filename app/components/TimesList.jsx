import React from 'react';

import TableRow from 'TableRow';

class TimesList extends React.Component {
  constructor(props) {
    super(props);
  }

  addRow() {
    // get the rows
    // var rows = ;
    // get the current row
    // split the existing rows
    // push a new row in the mix

  }
  render() {
    var {rows} = this.props;
    var renderTimerRows = () => {
      return rows.map((row) => {
        return <TableRow key={row.id} {...row}/>
      });
    };
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
          {renderTimerRows()}
        </tbody>
      </table>
    )
  }
}


export default TimesList;
