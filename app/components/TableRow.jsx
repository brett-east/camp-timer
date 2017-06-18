import React from 'react';
import {connect} from 'react-redux';

import SoundsDropdown from 'SoundsDropdown';
import {addRow, removeRow, updateRowTime, updateRowSound, updateRowEnabled, validateTime} from 'actions';

class TableRow extends React.Component {
  constructor(props){
    super(props);
  }
  handleChange(event) {
    var {dispatch, id} = this.props;
    dispatch(updateRowSound(id, event.target.value));
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
          <SoundsDropdown value={sound} onChange={this.handleChange.bind(this)}/>
        </td>
        <td>
          <input type="checkbox" checked={enabled} value="enabled" onChange={() => dispatch(updateRowEnabled(id))}/>
        </td>
        <td>
          <button onClick={() => dispatch(removeRow(id))}>remove</button>
        </td>
      </tr>
    )
  }
}

export default connect(state => state)(TableRow);
