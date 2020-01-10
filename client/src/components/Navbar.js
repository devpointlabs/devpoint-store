import React, { useState, } from 'react';
import { withRouter } from 'react-router-dom';
import { AuthConsumer } from '../providers/AuthProvider';
import { Link, NavLink } from 'react-router-dom';
import { Button, Icon, Dropdown, } from "semantic-ui-react";
import minilogo from '../components/Images/DevPoint_Labs.png'
import '../App.css';
import styled from "styled-components";
import '../App.css';


const Navbar = (props) => {
  const [selection, setSelection] = useState('')

  const menuOptions = [
    { key: 1, text: 'Hats', value: 'Hats' },
    { key: 2, text: 'Stickers', value: 'Stickers' },
    { key: 3, text: 'Contact', value: 'Contact' },
    { key: 4, text: 'Register', value: 'Register' },
    { key: 5, text: 'Login', value: 'Login' },
  ]
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
      return (
        <>
          <header>
            <div>
              <h3>
                <div
                  style={cust}
                  name='logout'
                  onClick={() => auth.handleLogout(props.history)}
                />
              </h3>
            </div>
          </header>
        </>
      )
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
                <Link to='register' >
                  <h3 >
                    <div
                      active={props.location.pathname === '/register'}
                    />register
                  </h3>
                </Link>
              </Button>
              <Button style={cust}>
                <Link to='categories/2'>
                  <h3>
                    <Nav
                      active={props.location.pathname === '/categories/2'} />
                  </h3>Hats
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
        <div class="texty">
          <div>
            <div style={home}>
              <NavLink
                to="/"
                className="nav-link"
                activeClassName="active"
              >
                <div>
                  <img
                    src={minilogo}
                    // "https://media.licdn.com/dms/image/C510BAQEaODeG-ziDdQ/company-logo_200_200/0?e=2159024400&v=beta&t=aHik_r9QdKRvn_OC_Ng1e-O0G9f58i-DiHsgmu81FhI"
                    height="60"
                    width="60"
                    class="navbar"
                  >
                  </img> .SHOP( )
                </div>
              </NavLink>
            </div>
          </div>
          <div style={cust}>
            <div>
              <NavLink
                to='/'
                className="nav-link"
                activeClassName="active"
              >
                <h3>
                  <Nav
                  />
                  All Products</h3>
              </NavLink>
            </div>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <div>
              <NavLink
                to='/categories/1'
                className="nav-link"
                activeClassName="active"
              >
                <h3>
                  <Nav
                  />
                  T-Shirts</h3>
              </NavLink>
            </div>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <div>
              <NavLink
                to='/categories/3'
                className="nav-link"
                activeClassName="active"
              >
                <h3>
                  <Nav
                   className="nav-link"
                   activeClassName="active"
                  />
                  Hoodies</h3>
              </NavLink>
            </div>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {selection != '' ? userOptions() : null}
            <div style={lift} >
              <Dropdown
                text='More'
                as="h3"
                placeholder='More'
                options={menuOptions}
                onChange={handleChange}
                value={selection}
                simple item
              />
            </div>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <div>
              <Link to="/Cart">
                <h3>
                  <Icon name='cart arrow down'>
                  </Icon>Cart
                  </h3>
              </Link>
            </div>
          </div>
        </div>
      )}
    </AuthConsumer>
  )
}
// const Spacer = styled.div(space)

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
  Color: 'black',
  fontSize: '30px',
  justifyContent: 'flex-End',
  paddingRight: '150px',
  // justifyContent: 'flexEnd'
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
  paddingTop: '1000[x'
}

export default withRouter(Navbar)
