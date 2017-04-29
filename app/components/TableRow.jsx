import React from 'react';

class TableRow extends React.Component {
  constructor(props){
    super(props);
    //this.state = { rows : 1 };
    //this.state = { rows: 2 };
  }
  render() {
    return (
      <tr>
        <td>
          <input type="number" value={this.props.hour}/>:<input type="number" value={this.props.minute}/>
          <input type="radio" name={'ampm' + this.props.row} value="am" checked={this.props.ampm === 'am'}/> am
          &nbsp;&nbsp;&nbsp;
          <input type="radio" name={'ampm' + this.props.row} value="pm" checked={this.props.ampm === 'pm'}/> pm
          Row {this.props.row}
        </td>
        <td>
          <select value={this.props.sound}>
            <option value="first_call">Call to Activities</option>
            <option value="reveille">Reveille - Wake Up</option>
            <option value="flag_up">To the Colors - Flag Up</option>
            <option value="sticks">Start Sticks</option>
            <option value="flag_down">Retreat - Flag Down</option>
            <option value="taps">Taps</option>
          </select>
        </td>
        <td>
          <input type="checkbox" checked={this.props.enabled} value="enabled"/>
        </td>
        <td>
          <button onClick>remove</button>
        </td>
        <td>
          <button>add</button>
        </td>
      </tr>
    )
  }
}

export default TableRow;
