import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/styles.scss';
import Header from './components/Header';
import SideNav from './components/SideNav';
import Dashboard from './components/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Header />
    <SideNav />
    <div className='wrapper dashboard'>
      <Router>
        <Routes>
          <Route path="/user/:id" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  </React.StrictMode>
);


