
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Desing/Home';



const AllRouter: React.FC = () => {
  return (
   
        
      <Routes>
        <Route path="/" element={<Home/>} />
      
      </Routes>

  );
}

export default AllRouter;
