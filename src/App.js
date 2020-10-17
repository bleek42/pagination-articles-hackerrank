import React from 'react';
import './App.css';
import Articles from './components/Articles';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Paginationn in React.js</h1>
        <Articles page={1} />
      </header>
    </div>
  );
}

export default App;
