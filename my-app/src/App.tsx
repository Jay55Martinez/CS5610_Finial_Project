import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Pages from './Pages';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          { /*<Route path = "/" element = {<Navigate to = "/home" />} /> */}
          <Route path = "/*" element = {<Pages/>} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;