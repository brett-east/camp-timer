import React from 'react';
import {connect} from 'react-redux';

import {addRow, removeRow, updateRowTime, updateRowSound, updateRowEnabled, validateTime} from 'actions';

class TableRow extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    var {id, time, sound, enabled, dispatch} = this.props;
    return (
      <tr>
        <td>
          <input type="text" ref="time" value={time} onChange={() => {
              dispatch(updateRowTime(id, this.refs.time.value));
            }} onBlur={() => dispatch(validateTime(id))}/>
        </td>
        <td>
          <select value={sound} ref="sound" onChange={(event)=> dispatch(updateRowSound(id, event.target.value))}>
            <option value="first_call">Call to Activities</option>
            <option value="reveille">Reveille - Wake Up</option>
            <option value="flag_up">To the Colors - Flag Up</option>
            <option value="sticks">Start Sticks</option>
            <option value="flag_down">Retreat - Flag Down</option>
            <option value="taps">Taps</option>
          </select>
        </td>
        <td>
          <input type="checkbox" checked={enabled} value="enabled" onChange={() => dispatch(updateRowEnabled(id))}/>
        </td>
        <td>
          <button onClick={() => dispatch(removeRow(id))}>remove</button>
        </td>
        <td>
          <button onClick={() => dispatch(addRow())}>add</button>
        </td>
      </tr>
    )
  }
}

export default connect(state => state)(TableRow);
