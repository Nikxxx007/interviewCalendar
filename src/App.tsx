import React, {useState} from 'react';

import {UpperLine} from "./components/UpperLine";
import {BottomLine} from "./components/BottomLine";
import {DateBar} from "./components/DateBar";

const App: React.FC = () => {
    const [event, setEvent] = useState<Date[]>([]);

    return (
      <>
          <UpperLine />
          <DateBar />
          <BottomLine selected={false}/>
      </>
  );
}

export default App;
