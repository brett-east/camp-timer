import uuid from 'uuid';
import path from 'path';
import axios from 'axios';


export var setTimes = (rows) => {
  try {
    const serializedTimes = JSON.stringify(rows);
    localStorage.setItem('rows', serializedTimes);
  } catch (err) {
    console.log(err);
  }
};

export var getTimes = () => {
  try {
    const serializedTimes = localStorage.getItem('rows');
    if (serializedTimes === null || JSON.parse(serializedTimes).rows.length < 1) {
      return {
        'rows': [{
            id: uuid(),
            time: '',
            sound: 'first_call',
            enabled: true
          }]
        };
    }
    return JSON.parse(serializedTimes);
  } catch (err) {
    console.log(err);
    return {
      'rows': [{
          id: uuid(),
          time: '',
          sound: 'first_call',
          enabled: true
        }]
      };
  }
};

// TODO: this will need to go into a real reducers at some point
export var initialSounds = {
  sounds: [{
    id: uuid(),
    name: 'Call to activities',
    value: 'first_call',
    path: path.join(__dirname, 'assets/sounds/first_call.mp3')
  },{
    id: uuid(),
    name: 'Reveille - wake up',
    value: 'reveille',
    path: path.join(__dirname, 'assets/sounds/reveille.mp3')
  },{
    id: uuid(),
    name: 'To the colors - flag up',
    value: 'flag_up',
    path: path.join(__dirname, 'assets/sounds/flag_up.mp3')
  },{
    id: uuid(),
    name: 'Start sticks',
    value: 'sticks',
    path: path.join(__dirname, 'assets/sounds/sticks.mp3')
  },{
    id: uuid(),
    name: 'Retreat - flag down',
    value: 'flag_down',
    path: path.join(__dirname, 'assets/sounds/flag_down.mp3')
  },{
    id: uuid(),
    name: 'Taps',
    value: 'taps',
    path: path.join(__dirname, 'assets/sounds/taps.mp3')
  }]
};
