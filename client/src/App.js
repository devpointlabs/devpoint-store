import Cart from './components/Cart';
import Contact from  './components/Contact'
import React from 'react';
import FetchUser from './components/FetchUser'
import Home from './components/Home'
import Login from './components/Login'
import NoMatch from './components/NoMatch'
import Navbar from './components/Navbar'
import Register from './components/Register'
import { Switch, Route } from 'react-router-dom'

const App = () => (
  <>
  <Navbar />
  <FetchUser>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route exact path="/Cart" component={Cart} />
      <Route exact path="/Contact" component={Contact}/>
      <Route component={NoMatch} />
    </Switch>
  </FetchUser>
  </>
)

export default App;
