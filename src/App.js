import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a><br />
        {/* You do it for her, that is to say you'll do it for him. */}
        <div id="todo">
          当面やること
          <ul>
            <li>Reactでフロントを作る</li>
            <li>golangでサーバサイドを作る</li>
            <li>EKSを使う</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
