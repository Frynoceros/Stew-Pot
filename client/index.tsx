import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Pantry from './pages/Pantry';
import Search from './pages/Search';
// import { store } from './app/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />  
        <Route path="/pantry" element={<Pantry />} />  
        <Route path="/search" element={<Search />} />  
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);