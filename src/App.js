import React from 'react';
import './App.css';

import Header from './components/Header/header'
import Slideshow from './components/Slideshow/slideshow'
import Footer from './components/Footer/footer'

function App() {
  return (
    <div>

      <div className="container-fluid">
        <div className="row">
            <Header />
        </div>
      </div>

      <Slideshow />
      {/* <div className="container-fluid">
        <div className="row">
          <Slideshow />
        </div>
      </div> */}
        
      <div className="container-fluid">
        <div className="row">
            <Footer />
        </div>
      </div>

    </div>
  );
}

export default App;
