import React from 'react';
import {connect} from 'react-redux';

import TableRow from 'TableRow';

class TimesList extends React.Component {
  constructor(props) {
    super(props);
  }
  renderTimerRows = () => {
    var { rows, savedList } = this.props;
    if (!savedList) {
      return (
        <p>Start by adding a new day, and then add a row to begin.</p>
      );
    }
    return rows.map((row) => {
      return <TableRow key={row.id} {...row} />
    });
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
          </tr>
        </thead>
        <tbody>
          {this.renderTimerRows()}
        </tbody>
      </table>
    )
  }
}


export default connect(state => state)(TimesList);
