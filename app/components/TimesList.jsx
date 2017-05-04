import React from 'react';

import TableRow from 'TableRow';

class TimesList extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddRow = this.handleAddRow.bind(this);
  }

  handleAddRow() {
    this.props.handleAddRow()
  }
  render() {
    var {rows} = this.props;
    var renderTimerRows = () => {
      return rows.map((row) => {
        return <TableRow key={row.id} {...row} handleAddRow={this.handleAddRow}/>
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
