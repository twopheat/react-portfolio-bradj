import React from 'react';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import "./styles/style.css";


import {
  BrowserRouter as Router
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
        <Wrapper>
          <Header />
          
          <div id="maincontent">
            
          <Main />
          
          </div>
          <Footer />
        </Wrapper>
        </Router>
      </header>
    </div>
  );
}

export default App;
