import React from 'react';
import UpdateItem from './components/UpdateItem';

const API_URI = 'http://localhost:3000/items/1'; // Make sure this matches your db.json

function App() {
  return (
    <div>
      <h1>React Update Item App</h1>
      <UpdateItem />
    </div>
  );
}

export default App;
