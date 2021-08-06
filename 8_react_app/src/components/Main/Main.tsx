import React from 'react';
import logo from './logo.svg';
import './Main.css';

export const Main: React.FC = () => {
  return (
    <main className="main">
      <img src={logo} className="main-logo" alt="logo" />
      <p>
        Main component
      </p>
      <a
        className="main-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </main>
  );
};
