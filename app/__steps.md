# Steps for the app

- put state on TimerApp *(tick)*
- render multiple rows based on state *(tick)*
- write tests
- add a single row
- write test
- remove a single row
- write test
- add set time functionality
- give rows a random id
- change the state of an individual row
- add actions
- add reducers
- move state to a redux store
- add play sound functionality


Possible state

{
  currentlyPlaying: '', - state only
  time: '', - state only
  manualSound: {}, - state only
  savedLists: [], - mongo
  rows: [], - mongo
  currentList: { name: '', \_id : ''}, - mongo (coz if you come back, I want to show it to you)
  sounds: '' - this is more complicated, maybe mongo for now
}


- Start with blank user,
- Then add a new list, and give it a name
  - make that the currentList
  - add that to the mongo TimerList collection
- Add a new row
  - associate that with the mongo TimerRow collection
  - associate the row with the timerList instance
  - add the row to state
- Edit the row
  - update the state
  - on exit or on enabled, or remove, or change sound, push changes to mongo
- Remove a row
  - remove the row from state
  - remove the row from the TimerRow collection
- Remove a list
  - remove the list from the state
  - remove the list from mongo
  - remove all the associated rows from the TimerRow collection
