import React from 'react';

import {UpperLine} from "./components/UpperLine";
import {BottomLine} from "./components/BottomLine";

const App: React.FC = () => {
  return (
      <>
          <UpperLine />

          <BottomLine selected={false}/>
      </>
  );
}

export default App;
