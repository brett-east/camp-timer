import { addNewList } from 'TimerAPI';

export const addList = (list) => {
  console.log('list', list);
  return {
    type: 'ADD_LIST',
    list
  }
};

export const startAddList = (listName) => {
  return (dispatch, getState) => {
    return addNewList(listName).then((list) => {
      dispatch(addList(list));
    });
  }
};
