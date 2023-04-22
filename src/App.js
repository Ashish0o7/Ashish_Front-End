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
      <h1>SteelEye List</h1>
      <List items={items} />
      <p> <a href="https://github.com/Ashish0o7/Ashish_Front-Ends">GitHub</a></p>
    </div>
    

  );
}

export default App;
