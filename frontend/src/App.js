import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <header>
          <Navbar />
        </header>
      </div>
    </BrowserRouter>
  )
}

export default App