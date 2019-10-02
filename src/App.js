import React from 'react';
import { Switch, Route } from "react-router-dom"
import './App.css';

import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Slideshow from './components/Slideshow/slideshow'
import NotFound from './components/NotFound/notFound'
import Pagina from './components/Pagina/pagina'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Slideshow} />
        <Route exact path="/home" component={Slideshow} />
        <Route exact path="/pagina1" component={() => <Pagina image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png" title="Raticate" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget turpis turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus." />} />
        <Route exact path="/pagina2" component={() => <Pagina image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png" title="Nidoqueen" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget turpis turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus." />} />
        <Route exact path="/pagina3" component={() => <Pagina image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png" title="Growlithe" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget turpis turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus." />} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
