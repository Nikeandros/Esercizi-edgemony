//App.jsx

import React from 'react';
import '../src/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

const navItems = [
  { text: 'Home', url: '#' },
  { text: 'About', url: '#' },
  { text: 'Services', url: '#' },
  { text: 'Contact', url: '#' }
];

const footerMenus = [
  {
    title: 'Menu 1',
    items: [
      { text: 'Submenu 1', url: '#' },
      { text: 'Submenu 2', url: '#' }
    ]
  },
  {
    title: 'Menu 2',
    items: [
      { text: 'Submenu 1', url: '#' },
      { text: 'Submenu 2', url: '#' }
    ]
  }
];
const App = () => {
  return (
    <div id="app">
      <Header navItems={navItems} />
      <Main />
      <Footer footerMenus={footerMenus} />
    </div>
  );
};


export default App;


