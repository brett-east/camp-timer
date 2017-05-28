import React from 'react';
import {connect} from 'react-redux';

import SoundsDropdown from 'SoundsDropdown';
import { updateManualSound } from 'actions';

// TODO: store this change in localStorage or something
class ManualSound extends React.Component {
  constructor(props){
    super(props);
  }
  handleChange(event) {
    var {dispatch, manualSound} = this.props;
    dispatch(updateManualSound(event.target.value));
  }
  render() {
    let {manualSound} = this.props;
    return (
      <div className="col-md-6">
      <div className="manual-play-container">
        <h2>Play Manual Sound</h2>
          <SoundsDropdown value={manualSound} className="manual_sound_option" onChange={this.handleChange.bind(this)}/>
        <button className="play_manual_sound">Play</button>
        <button className="pause_manual_sound">Pause</button>
      </div>
    </div>
    )
  }
}

export default connect((state, props) => {
  return {
    manualSound: state.manualSound,
    ...props
  }
})(ManualSound);
