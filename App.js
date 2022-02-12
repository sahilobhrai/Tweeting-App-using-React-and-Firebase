
import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />
      {/* feed*/}
      <Feed />

    </div>
  );
}

export default App;
