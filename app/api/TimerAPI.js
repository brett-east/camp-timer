import uuid from 'uuid';

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
