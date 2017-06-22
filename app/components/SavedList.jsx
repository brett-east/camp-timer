import React from 'react';
import { connect } from 'react-redux';

import { sortRows } from 'actions/actions';
import { addRow } from 'actions/rowActions';
import { startAddList } from 'actions/listActions';

class SavedList extends React.Component {
  constructor(props){
    super(props);
    this.handleAddList = this.handleAddList.bind(this);
  }
  handleAddList() {
    console.log('adding list');
    this.props.dispatch(startAddList('Default list name'));
  }
  render() {
    let { dispatch, savedList } = this.props;
    return (
      <div>
        <hr />
        <select>
          <option>Saved list 1</option>
          <option>Saved list 2</option>
        </select>
        { savedList && <button onClick={() => dispatch(sortRows())}>Order list</button>}
        { savedList && <button>Remove current list</button>}
        <button onClick={this.handleAddList}>Add new list</button>
        { savedList && <button onClick={() => dispatch(addRow())}>Add new row</button>}
        <hr />
      </div>
    )
  }
}

export default connect(state => state)(SavedList);
