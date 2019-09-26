import React from 'react';
import { Switch, Route } from "react-router-dom"
import './App.css';

import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Slideshow from './components/Slideshow/slideshow'
import Info from './components/Info/info'
import NotFound from './components/NotFound/notFound'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/home" component={Slideshow} />
        <Route exact path="/" component={Slideshow} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
    // <div>

    //   <div className="container-fluid">
    //     <div className="row">
    //         <Header />
    //     </div>
    //   </div>

    //   <div className="container-fluid">
    //     <div className="row">

    //       <div className="col-md-auto">
    //         <Slideshow />
    //       </div>

    //       <div className="col pt-1">
    //         <Info
    //           imageDefMale='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    //           imageShiMale='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    //           imageDefFemale='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    //           imageShiFemale='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    //           title='Bulbasaur '
    //           type1='grass'
    //           type2='grass'
    //           subtitle="Lorem ipsum dolor sit amet..."
    //           text="Consectetur adipiscing elit. Etiam a nibh eu enim ornare egestas sit amet id orci. Cras varius mauris vitae dolor sollicitudin gravida. In ut faucibus massa. Mauris mattis tempor nulla posuere eleifend. Duis rhoncus rutrum nibh, at vulputate sapien tincidunt sit amet. Nulla quis purus eros. Proin convallis vestibulum risus. Integer lobortis, lacus eget suscipit congue, magna diam elementum nulla, et congue mauris tortor vel tortor." />
    //       </div>
        
    //     </div>
    //   </div>

    //   <div className="container-fluid">
    //     <div className="row">
    //         <Footer />
    //     </div>
    //   </div>

    // </div>
  );
}

export default App;
