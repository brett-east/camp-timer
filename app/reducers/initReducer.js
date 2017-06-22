export const savedListsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'NEW_USER':
      return {hello: 'hi'};
    case 'INIT_USER':
      return action.savedLists;
    default:
      return state;
  }
}

export const currentListReducer = (state = {}, action) => {
  switch (action.type) {
    case 'NEW_USER':
      return state;
    case 'INIT_USER':
      return action.currentList;
    default:
      return state;
  }
}
