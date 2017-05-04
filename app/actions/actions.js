// row actions
/// addRow
/// removeRow
/// updateRow

export var addRow = () => {
  return {
      type: 'ADD_ROW'
      row: {
        id: 'abc',
        time: '1250',
        sound: 'reveille',
        enabled: true
      }
    };
};

export var removeRow = (row) => {
  return {
    type: 'REMOVE_ROW',
    row.id
  }
};

export var updateRow = (row, update) => {
  return {
    type: 'UPDATE_ROW',
    row,
    update
  }
};
