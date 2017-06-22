import React from 'react';
import { connect } from 'react-redux';

import { sortRows, addRow } from 'actions/actions';

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
        <button>Remove current list</button>
        <button>Add new list</button>
        <button onClick={() => dispatch(addRow())}>Add new row</button>
        <hr />
      </div>
    )
  }
}

export default connect(state => state)(SavedList);
