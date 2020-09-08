import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='app-body'>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
