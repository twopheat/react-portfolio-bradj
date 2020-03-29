import React from 'react';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import "./styles/style.css";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Wrapper>
          <Header />
          <Main />
          <Footer />
        </Wrapper>
      </header>
    </div>
  );
}

export default App;
