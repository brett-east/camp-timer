import expect from 'expect';

import * as TimerAPI from 'TimerAPI';

describe('TimerAPI', () => {

  beforeEach(() => {
    localStorage.removeItem('rows');
  });

  it('should exist', () => {
    expect(TimerAPI).toExist();
  });

  describe('setTimes', () => {

    it('should set valid rows array', () => {
      var rows = [{
            id: 23,
            time: '',
            sound: 'first_call',
            enabled: true
      }];
      TimerAPI.setTimes(rows);

      var actualTimes = JSON.parse(localStorage.getItem('rows'));
      console.log(actualTimes);
      expect(actualTimes).toEqual(rows);
    })

  });


  describe('getTimes', () => {

    it('should return a blank row with default settings for no localStorage', () => {
      var actualTimes = TimerAPI.getTimes();
      expect(actualTimes.rows[0]).toInclude({
        time: '',
        sound: 'first_call',
        enabled: true
      });
    });

    it('should get times if rows in localStorage', () => {
      var rows = {
        rows: [{
              id: 23,
              time: '',
              sound: 'first_call',
              enabled: true
        }]
      };
      localStorage.setItem('rows', JSON.stringify(rows));

      var actualTimes = TimerAPI.getTimes();

      expect(actualTimes).toEqual(rows);
    });

  });

});
