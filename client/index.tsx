import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Pantry from './pages/Pantry';
import Search from './pages/search/Search';
import { store } from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="pantry" element={<Pantry />} />
          <Route path="search" element={<Search />} />
          <Route
            path="*"
            element={
              <main style={{padding: '1rem'}}>
                <p>There's nothing here!</p>
              </main>
            } /* no match case */
          />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);