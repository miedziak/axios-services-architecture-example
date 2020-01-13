import React from 'react';
import './App.css';
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href='/' className='App-title-link'>
          Axios architecture sample
        </a>
      </header>
      <main className="App-content">
        <Routes />
      </main>
    </div>
  );
}

export default App;
