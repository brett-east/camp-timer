import React from 'react';
import { connect } from 'react-redux';

import { sortRows } from 'actions';

class SavedList extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    let { dispatch } = this.props;
    return (
      <div>
        <hr />
        <select>
          <option>Saved list 1</option>
          <option>Saved list 2</option>
        </select>
        <button onClick={() => dispatch(sortRows())}>Order list</button>
        <button>Save current list</button>
        <hr />
      </div>
    )
  }
}

export default connect(state => state)(SavedList);
