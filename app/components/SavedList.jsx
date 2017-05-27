import React from 'react';
import { connect } from 'react-redux';

class SavedList extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <hr />
        <select>
          <option>Saved list 1</option>
          <option>Saved list 2</option>
        </select>
        <button>Order list</button>
        <button>Save current list</button>
        <hr />
      </div>
    )
  }
}

export default connect(state => state)(SavedList);
