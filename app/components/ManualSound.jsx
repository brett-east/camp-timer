import React from 'react';
import {connect} from 'react-redux';

import SoundsDropdown from 'SoundsDropdown';
import { updateManualSound, setCurrentlyPlaying } from 'actions';
import { playSound, stopSound } from './../utils/playSound';

// TODO: store this change in localStorage or something
class ManualSound extends React.Component {
  constructor(props){
    super(props);
  }
  handleChange(event) {
    var { dispatch, manualSound, sounds } = this.props;
    let newSound = sounds.filter((sound) => {
      return sound.value === event.target.value;
    })[0] || {};
    dispatch(updateManualSound(newSound));
  }
  handlePlaySound() {
    var { dispatch, manualSound, currentlyPlaying } = this.props;
    let currentSound = playSound(manualSound.path, currentlyPlaying);
    dispatch(setCurrentlyPlaying(currentSound)); // TODO: use redux thunk for this
  }
  handleStopSound() {
    var { dispatch, currentlyPlaying } = this.props;
    stopSound(currentlyPlaying); // TODO: use redux thunk to set up 'startStopSound', and dispatch setCurrentlyPlaying
    dispatch(setCurrentlyPlaying(null));
  }
  render() {
    let {manualSound} = this.props;
    return (
      <div className="col-md-6">
      <div className="manual-play-container">
        <h2>Play Manual Sound</h2>
          <SoundsDropdown value={manualSound.value} className="manual_sound_option" onChange={this.handleChange.bind(this)}/>
        <button className="play_manual_sound" onClick={this.handlePlaySound.bind(this)}>Play</button>
        <button className="stop_manual_sound" onClick={this.handleStopSound.bind(this)}>Stop All</button>
      </div>
    </div>
    )
  }
}

export default connect((state, props) => {
  return {
    manualSound: state.manualSound,
    sounds: state.sounds,
    currentlyPlaying: state.currentlyPlaying,
    ...props
  }
})(ManualSound);
