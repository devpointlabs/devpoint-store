import React, { useState, useEffect, } from 'react';
import { withRouter, } from 'react-router-dom';
import { AuthConsumer } from '../providers/AuthProvider';
import { Link, NavLink } from 'react-router-dom';
import { Button, Icon, Dropdown, } from "semantic-ui-react";
import minilogo from '../components/Images/DevPoint_Labs.png'
import styled from "styled-components";
import '../App.css';
import CategoryForm from './CategoryForm';
import axios from 'axios';

const Navbar = (props) => {
  const [selection, setSelection] = useState('')
  const [categories, setCategories] = useState([])
  //define c 
  // const options = categories.map( c => { return { T-shirts: c, Hats: c, Hoodies: c, }} );

  const menuOptions = [
    { key: 1, text: 'Hats', value: 'Hats' },
    { key: 2, text: 'Stickers', value: 'Stickers' },
    { key: 3, text: 'Contact', value: 'Contact' },
    { key: 4, text: 'Register', value: 'Register' },
    { key: 5, text: 'Login', value: 'Login' },
  ]

  useEffect(() => {
    axios.get("/api/categories")
      .then(res => {
        setCategories(res.data)
      })
  }, []);

  //delete category
  // deleteCategory = id => {
  //   axios
  //     .delete(`/api/categories/${category_id}/item/${id}`)
  //     .then(res => {
  //       const {categories} = useState;
  //       setSelection({ categories: categories.filter(c => c.id !==id) });
  //     });
  // };

  //this is also needed figure out function

  // getCategories = () =>{
  //   const{ T-shirts, Hats, hoddies} = this.state;
  //   axios.get(`/api/categories/${category}?`)
  //   .then(res =>{
  //     cosnst { categories, } = res.data;
  //     this.ListeningStateChangedEvent({
  //       categories: [... this.state.categories, ...categories],
  //     })
  //   });
  // }

  const handleChange = (e, { value, }, ) => setSelection(value)

  const userOptions = () => {
    switch (selection) {
      case 'Contact':
        props.history.push('/Contact')
        setSelection('')
        // location.reload();
        break;

      case "Register":
        props.history.push('/Register')
        setSelection('')
        // location.reload();
        break;

      case "Login":
        setSelection('')
        props.history.push('/login')
        // location.reload();
        break;

      case "Hats":
        setSelection('')
        props.history.push('/categories/2')
        // location.reload();
        break;

      case "Stickers":
        setSelection('')
        props.history.push('/categories/4')
        // location.reload();
        break;
    }
  }

  const rightNavItems = (auth) => {
    if (auth.user) {
      return useState.categories.map(i => (
        <>
          <header>
            <div>
              <h3>
                <div
                  style={cust}
                  name='/logout'
                  onClick={() => auth.handleLogout(props.history)}
                />
              </h3>
            </div>
          </header>
        </>
      ));
    } else {
      return (
        <>
          <div>
            <div>
              <Button style={cust}>
                <Link to='/login'>
                  <h3>
                    <Nav
                      active={props.location.pathname === '/login'} />
                  </h3>login
                </Link>
              </Button>
              <Button style={cust}>
                <Link to='/register' >
                  <h3 >
                    <div
                      active={props.location.pathname === '/register'}
                    />register
                  </h3>
                </Link>
              </Button>
              <Button style={cust}>
                <Link
                  to='/categories/2'
                // to={`/categories/${c.id}`}
                >
                  <h3>
                    <Nav
                      id="2"
                    />
                  </h3>
                  Hats
                </Link>
              </Button>
            </div>
          </div>
        </>
      )
    }
  }
  return (
    <AuthConsumer>
      {auth => (
        <div>
          <div class="text">
            <div style={home}>
              <NavLink
                to="/" exact
                activeClassName="active"
                className="nav-link"
              >
                <div style={text}>
                  <img
                    src={minilogo}
                    height="60"
                    width="60"
                    class="navbar"
                  >
                  </img>
                  .SHOP( )
                </div>
              </NavLink>
            </div>
          </div>
          {/* navbar begins here  */}
          <div
            color="black"
            style={cust}>
            <div>
              <NavLink
                to='/' exact
                activeClassName="active"
                className="nav-link"
                active={props.location.pathname === '/'}
              >
                <h3 style={text}>
                  <Nav
                  />
                  All Products</h3>
              </NavLink>
            </div>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <div color="black">
              <NavLink
                to='/categories/1'
                //call catergorie id
                // to={`/categories/${c.id}`}
                id='1'
                activeClassName="active"
                className="nav-link"
                active={props.location.pathname === '/categories/1'}
              >
                <h3 style={text}>
                  <Nav
                  />
                  T-Shirts
                  </h3>
              </NavLink>
            </div>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <div color="black">
              <NavLink
                to='/categories/3' exact
                //call catergorie id
                // to={`/categories/${c.id}`}
                id="3"
                activeClassName="active"
                className="nav-link"
                active={props.location.pathname === '/categories/3'}
              >
                <h3 style={text}>
                  Hoodies
                  </h3>
              </NavLink>
            </div>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {selection != '' ? userOptions() : null}
            <div
              style={lift} >
              <Dropdown
                style={text}
                text='More'
                as="h3"
                options={menuOptions}
                onChange={handleChange}
                value={selection}
                simple item
              />
            </div>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <div>
              <Link
                to="/Cart"
                id='Cart'
                active={props.location.pathname === '/Cart'}
              >
                <h3
                  style={text}>
                  <Icon
                    style={text}
                    name='cart arrow down'>
                  </Icon>
                  Cart
                  </h3>
              </Link>
            </div>
          </div>
        </div>
      )}
    </AuthConsumer>
  )
}

const Nav = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: white;
  display: flex;
  color: black;
  fontSize: 30px;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`
const cust = {
  display: 'flex',
  paddingBottom: '55px',
  backgroundColor: 'white',
  color: 'black',
  fontSize: '30px',
  justifyContent: 'flex-End',
  paddingRight: '150px',
}

const home = {
  backgroundColor: 'white',
  paddingTop: '60px',
  paddingLeft: '105px',
  color: 'black',
  fontSize: '27px'
}

const text = {
  color: 'black',
}

const lift = {
  position: 'realitive',
}

export default withRouter(Navbar)
