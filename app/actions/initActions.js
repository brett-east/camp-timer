export var initUser = (user) => {
  return {
    type: 'INIT_USER',
    user
  }
}

export var newUser = () => {
  return {
    type: 'NEW_USER'
  }
}
