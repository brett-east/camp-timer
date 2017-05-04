import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import TimesList from 'TimesList';
import TableRow from 'TableRow';

describe('TimesList', () => {
  it('should exist', () => {
    expect(TimesList).toExist();
  });

  it('should render one TableRow for each row item', () => {
    var rows = [{
      id: 1,
      time: 1234,
      sound: "reveille",
      enabled: true
    },
    { id: 2,
      time: 1720,
      sound: "first_call",
      enabled: false
    }];
    var timerList = TestUtils.renderIntoDocument(<TimesList rows={rows} />);
    var tableRows = TestUtils.scryRenderedComponentsWithType(timerList, TableRow);

    expect(tableRows.length).toBe(rows.length);
  })
});
