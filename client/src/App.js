import React, { Fragment } from 'react';
import { Route, } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Contact from  './components/Contact'
import Navbar from "./components/Navbar";

const App = () => (
  <Fragment>
    <Navbar />
    <Route exact path="/" component={Home} />
    <Route exact path="/Cart" component={Cart} />
    <Route exact path="/Contact" component={Contact}/>
  </Fragment>
);

export default App;
