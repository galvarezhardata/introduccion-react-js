import React from 'react';
import './App.css';

import Header from './components/Header/header'

function App() {
  return (
    <div className="container-fluid">
      
      <div className="row">
        <div class="col">
          <Header />
        </div>
      </div>

      {/* <div className="row">
        <Slideshow />
      </div>
      
      <div className="row">
        <Content />
      </div>
      
      <div className="row">
        <Footer />
      </div> */}

    </div>
  );
}

export default App;
