import React from 'react';
import '../src/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

const App = () => {
  return (
    <div id="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
