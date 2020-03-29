import React from 'react';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Main from './components/Main';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Wrapper>
          <Header />
          <Main />
        </Wrapper>
      </header>
    </div>
  );
}

export default App;
