import React from 'react';

class CurrentTime extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="col-md-6">
        <div className="current-container">
          <h2>Current time</h2>
          <p className="current-time">2:26pm</p>
        </div>
      </div>
    )
  }
}

export default CurrentTime;
