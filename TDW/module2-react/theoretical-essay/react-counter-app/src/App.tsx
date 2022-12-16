import React, { useState } from 'react';
import Button from './components/Button';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <p>{count}</p>
      <Button label={'click me'} onClick={() => {
        setCount(count + 1)
      }} />
    </div>
  );
}

export default App;
