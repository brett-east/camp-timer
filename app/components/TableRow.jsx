import React from 'react';

class TableRow extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    var {time, sound, enabled } = this.props;
    return (
      <tr>
        <td>
          <input type="number" value={time}/>
        </td>
        <td>
          <select value={sound}>
            <option value="first_call">Call to Activities</option>
            <option value="reveille">Reveille - Wake Up</option>
            <option value="flag_up">To the Colors - Flag Up</option>
            <option value="sticks">Start Sticks</option>
            <option value="flag_down">Retreat - Flag Down</option>
            <option value="taps">Taps</option>
          </select>
        </td>
        <td>
          <input type="checkbox" checked={enabled} value="enabled"/>
        </td>
        <td>
          <button>remove</button>
        </td>
        <td>
          <button>add</button>
        </td>
      </tr>
    )
  }
}

export default TableRow;
