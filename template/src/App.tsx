import React from 'react';
import hero from './hero.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={hero} className="App-hero" alt="hero" />
        <p>
          Get started with Azure Communication Services UI Library.
        </p>
        <a
          className="App-link"
          href=".ms/acsstorybook"
          target="_blank"
          rel="noopener noreferrer"
        >
          Storybook
        </a>
      </header>
    </div>
  );
}

export default App;
