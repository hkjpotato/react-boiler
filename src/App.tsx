import React from 'react';
import logo from './logo.svg';
import './App.css';

type AppProps = {
  appName: string,
}

const App:React.FunctionComponent<AppProps> =  ({ appName }) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>hello ts react {name}</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
