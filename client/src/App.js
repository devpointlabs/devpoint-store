import React from 'react'
import Cart from './components/Cart'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './components/Contact'
import NoMatch from './components/NoMatch'
import ItemView from './components/ItemView'
import Register from './components/Register'
import FetchUser from './components/FetchUser'
import { Switch, Route } from 'react-router-dom'
import CategoryView from './components/CategoryView'
import CategoryForm from './components/CategoryForm'
// import ItemVariantForm from './components/ItemVariantForm'

const App = () => (
  <>
<<<<<<< HEAD
    <Navbar />
      <FetchUser>
       <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path="/Cart" component={Cart} />
          <Route exact path='/login' component={Login} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/ItemView" component={ItemView} />
          <Route exact path='/register' component={Register} />
          <Route exact path="/CategoryForm" component={CategoryForm} />
          <Route exact path="/categories/:id" component={CategoryView} />
          {/* <Route exact path="/ItemVariantForm" component={ItemVariantForm}/> */}
          <Route exact path='/categories/:category_id/items/:id' component={ItemView} />
          <Route component={NoMatch} />
        </Switch>
      </FetchUser>
      <br />
    <Footer />
=======
  <Navbar />
  <FetchUser>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route exact path="/Cart" component={Cart} />
      <Route exact path="/Contact" component={Contact}/>
      <Route exact path="/CategoryForm" component={CategoryForm} />
      <Route exact path="/categories/:id" component={CategoryView} />
      <Route exact path='/categories/:category_id/items/:id' component={ItemView} />
      <Route component={NoMatch} />
    </Switch>
  </FetchUser>
  <br />
  <Footer />
>>>>>>> 06b2e17c3e6089086416a9ea5abb944faf5f5468
  </>
)

export default App;
