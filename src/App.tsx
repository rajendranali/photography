import React from 'react';

import './App.css';
import AllRouter from './Allrouter/Router';
import Navbar from './Allrouter/Navbar';
const navItems=[
  {
      id: 1,
      path: "/",
      label: "Home",
  }, {
      id: 1,
      path: "/",
      label: "Gallery",
  }, {
      id: 1,
      path: "/",
      label: "Collection",
  }
]
function App() {
  return (
    <div className="App">
       <Navbar navItems={navItems} />
      <AllRouter />
    </div>
  );
}

export default App;
