import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.scss';
import Header from './components/Header';
import SideNav from './components/SideNav';
import Dashboard from './components/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Header />
    <SideNav />
    <Dashboard />
  </React.StrictMode>
);

