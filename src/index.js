import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/styles.scss';
import Header from './components/Header';
import SideNav from './components/SideNav';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import NotFound from './components/pages/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Header />
    <SideNav />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


