export const savedListsReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_USER':
      return state;
    case 'INIT_USER':
      return action.savedList;
      case 'ADD_LIST':
        return [
          ...state,
          action.list
        ]
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
    case 'ADD_LIST':
      return action.list;
    default:
      return state;
  }
}
