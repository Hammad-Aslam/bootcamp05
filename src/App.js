

import Parent from './Parent.js';
import React, { useState } from 'react';
import CounterContext from './CounterContext.js';
const App = () => {
  let countState = useState(1)
  return (
    <CounterContext.Provider value={countState}>
    <div>
      <Parent />
    </div>
    </CounterContext.Provider>
  );
}

export default App;
