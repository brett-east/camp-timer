import React from 'react';
import { connect } from 'react-redux';
var moment = require('moment');
import 'howler';

import { updateCurrentTime } from 'actions';
import { playSound } from './../utils/playSound';

class CurrentTime extends React.Component {
  constructor(props){
    super(props);
  }
  componentWillReceiveProps() {
    var { date, rows, sounds } = this.props;
    rows.forEach((row) => {
      if (moment(date).isSame(moment(row.time, 'h:mm a').toDate(), 'second') && row.enabled && row.sound) {
        let soundPath = sounds.filter((sound) => {
          return sound.value === row.sound;
        })[0].path; // TODO: Can I pull this into a helper function getSoundPath(row,sounds) // maybe i just needs row
        playSound(soundPath);
      }
    });
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.props.dispatch(updateCurrentTime());
    },
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    var { date } = this.props;
    return (
      <div className="col-md-6">
        <div className="current-container">
          <h2>Current time</h2>
          <p className="current-time">{moment(date).format("h:mm:ss a")}</p>
        </div>
      </div>
    )
  }
}

export default connect((state) => {
  return {
    date: state.date,
    rows: state.rows,
    sounds: state.sounds
  }
})(CurrentTime);
