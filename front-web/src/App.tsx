import React from 'react';
import './App.css';

import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <div className="container">
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
