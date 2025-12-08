import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Intro from './component/Intro';


function App() {
  return (
    <div> 

     <BrowserRouter basename="/MYportfolio">
      <Routes>
        <Route path="/" element={<Intro />} />
      </Routes>
    </BrowserRouter>
  
    </div>
  );
}

export default App;
