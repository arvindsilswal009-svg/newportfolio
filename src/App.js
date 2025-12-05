import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Allelement from './component/Allelement';
import Nav from './component/Nav';

function App() {
  return (
    <div> 

     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Allelement />} />
      </Routes>
    </BrowserRouter>
  
    </div>
  );
}

export default App;
