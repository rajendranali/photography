import React from 'react';

import './App.css';
import AllRouter from './Allrouter/Router';
import Navbar from './Allrouter/Navbar';

function App() {
  return (
    <div className="App">
       <Navbar />
      <AllRouter />
    </div>
  );
}

export default App;
