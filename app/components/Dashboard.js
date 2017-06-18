import React from 'react';

import PrivateHeader from 'PrivateHeader';
import TimerApp from 'TimerApp';

export const Dashboard = (props) => {
  return (
    <div>
      <PrivateHeader title="Login Boilerplate" {...props}/>
      <TimerApp />
    </div>
  );
};
