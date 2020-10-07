import React from 'react';
import logo from './logo.svg';
import './App.css';
import Employees from './components/Employees';
import Button from './components/Button';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          <List/>
          <Button/>
          <Employees/>
      </header>
    </div>
  );
}

export default App;
