import React from 'react';
import { connect } from 'react-redux';

class SoundsDropdown extends React.Component {
  renderSoundOptions = () => {
    var {sounds} = this.props;
    return sounds.map((sound) => {
      return (<option key={sound.id} value={sound.value}>{sound.name}</option>);
    });
  }
  render() {
    var { className, onChange, value } = this.props;
    return (
      <select className={className} onChange={onChange} value={value}>
        <option value={undefined}>--</option>
        {this.renderSoundOptions()}
      </select>
    )
  }
}

export default connect((state, props) => {
  return {
    sounds: state.sounds,
    ...props
  };
})(SoundsDropdown);
