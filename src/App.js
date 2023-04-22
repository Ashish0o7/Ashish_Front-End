import React from 'react';
import List from './List';

function App() {
  const items = [
    { text: 'Banana' },
    { text: 'Apple' },
    { text: 'Watermelon' },
    { text: 'Lemon' },
  ];

  return (
    <div>
      <h1>List Example</h1>
      <List items={items} />
    </div>
  );
}

export default App;
