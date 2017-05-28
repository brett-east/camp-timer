import React from 'react';

class ManualSound extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="col-md-6">
      <div className="manual-play-container">
        <h2>Play Manual Sound</h2>
          <select className="manual_sound_option">
            <option value="first_call">Call to Activities</option>
            <option value="reveille">Reveille - Wake Up</option>
            <option value="flag_up">To the Colors - Flag Up</option>
            <option value="sticks">Start Sticks</option>
            <option value="flag_down">Retreat - Flag Down</option>
            <option value="taps">Taps</option>
          </select>
        <button className="play_manual_sound">Play</button>
        <button className="pause_manual_sound">Pause</button>
      </div>
    </div>
    )
  }
}

export default ManualSound;
